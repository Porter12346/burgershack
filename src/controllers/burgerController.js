import { burgerService } from "../services/BurgerService.js";
import BaseController from "../utils/BaseController.js";

export class BurgerController extends BaseController {
    constructor() {
        super('api/burgers')
        this.router.get('/menu', this.getBurgers)
        this.router.post('', this.postBurger)
        this.router.delete('/:burgerId', this.deleteBurger)
        this.router.put('/:burgerId', this.putBurger)
    }

    async putBurger(request, response, next) {
        try {
            const burger = await burgerService.putBurger(request.params.burgerId, request.body)
            response.send(burger)
        } catch (error) {
            next(error)
        }
    }

    async deleteBurger(request, response, next) {
        try {
            const burger = await burgerService.deleteBurger(request.params.burgerId)
            response.send(burger)
        } catch (error) {
            next(error)
        }

    }

    async getBurgers(request, response, next) {
        try {
            const burgers = await burgerService.getBurgersFromDB()
            response.send(burgers)
            console.log('🍔')
        } catch (error) {
            next(error)
        }

    }

    async postBurger(request, response, next) {
        try {
            const burger = request.body
            let newBurger = await burgerService.postBurgerToDB(burger)
            response.send(newBurger)
        } catch (error) {
            next(error)
        }

    }
}