import { dbContext } from "../db/DbContext.js";

class BurgerService {
    async deleteBurger(burgerId) {
        const burger = await dbContext.Burgers.findById(burgerId)
        if (burger != null) {
            console.log("o7 burger number ", burgerId);
            await burger.deleteOne()
            return(burger)
        }
        else {
            throw new Error('no burger with ID ', burgerId);
        }
    }

    async postBurgerToDB(burger) {
        const newBurger = await dbContext.Burgers.create(burger)
        return newBurger
    }

    async getBurgersFromDB() {
        const burgers = await dbContext.Burgers.find()
        return burgers
    }

}
export const burgerService = new BurgerService()