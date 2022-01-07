import { Router } from "express";

import { postRoutes } from "../routes/post.routes";

const router = Router();

router.use("/api", postRoutes);

export { router };