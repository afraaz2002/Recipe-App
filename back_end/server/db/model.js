import mongoose from "mongoose";

mongoose.connect('mongodb://127.0.0.1:27017/recipe');

const recipeSchema = new mongoose.Schema({
    recipeId: Number,
    url: String,
    title:String
})

const RecipeModel = mongoose.model('Recipe',recipeSchema );

export default RecipeModel;

