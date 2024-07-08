import mongoose, { Mongoose } from 'mongoose'
import { BurgerSchema } from '../models/Burger.js'

class DbContext {
  Burgers = mongoose.model('Burger', BurgerSchema) 
}

export const dbContext = new DbContext()
