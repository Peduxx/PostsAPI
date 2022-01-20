import { Router } from "express";
import { PostController } from "../../api/controllers/PostController";

const postRoutes = Router();

const postController = new PostController();

postRoutes.post("/newPost", postController.handle);

export { postRoutes };