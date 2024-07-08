import { type } from "express/lib/response.js";
import { Schema } from "mongoose";


export const BurgerSchema = new Schema({
    name: { type: String, maxLength: 25, required: true },
    price: { type: Number, max: 100, min: 0, required: true},
    ingredients: [{ type: String, maxLength: 25}]
})