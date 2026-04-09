import { Router } from "express";
import { CategoryController } from "../controllers/CategoryController";

const categoryRoutes = Router()
const categoryController = new CategoryController()

categoryRoutes.get("/", categoryController.list.bind(categoryController))
categoryRoutes.post("/", categoryController.create.bind(categoryController))

export default categoryRoutes