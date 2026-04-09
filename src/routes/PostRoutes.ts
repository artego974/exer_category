import { Router } from "express";
import { PostController } from "../controllers/PostController";

const postRoutes = Router()
const postController = new PostController()

postRoutes.get("/", postController.list.bind(postController))
postRoutes.post("/", postController.create.bind(postController))

export default postRoutes