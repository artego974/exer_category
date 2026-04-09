import { Router } from "express";
import { UserController } from "../controllers/UserController";

const userRoutes = Router()
const userController = new UserController()

userRoutes.get("/", userController.list.bind(userController))
userRoutes.post("/", userController.create.bind(userController))

export default userRoutes