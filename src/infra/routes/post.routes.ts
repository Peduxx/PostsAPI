import { Router } from "express";
import { PostController } from "../../api/controllers/PostRequestController";

const postRoutes = Router();

const postController = new PostController();

postRoutes.post("/newPost", postController.handle);

export { postRoutes };