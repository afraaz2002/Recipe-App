import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import axios from "axios";
import RecipeModel from "./db/model.js";

const app = express();
const port = 5000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {

    let favRecipes = await RecipeModel.find();
    res.json(favRecipes);

  } catch (err) {
    console.log("error while fetching " + err);
  }
})

app.post("/favourites", async (req, res) => {
  try {
    let id = req.body.id;

    let findRecipes = await RecipeModel.findOne({ recipeId:id });

    if (findRecipes == null) {

      let favouriteRecipe = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=9943321b4027415d94f69b8badada359`);

      const recipe = new RecipeModel({
        recipeId: id,
        url: favouriteRecipe.data.image,
        title: favouriteRecipe.data.title
      });

      await recipe.save();
    }

  } catch (error) {
    console.error("Failed to make request:", error.message);
  }
})

app.post("/delete", async (req, res) => {
  try {
    let id = req.body.id;
    console.log(id)
    await RecipeModel.findByIdAndDelete(id);
  } catch (error) {
    console.error("Failed to make request:", error.message);
  }
})

app.listen(port, () => {
  console.log("Server started on port " + port);
})