import { Router } from "express";
import categoryRoutes from "./CategoryRoutes";
import postRoutes from "./PostRoutes";
import userRoutes from "./UserRoutes";

const routes = Router()

routes.use("/user", userRoutes)
routes.use("/post", postRoutes)
routes.use("category",categoryRoutes)

export default routes