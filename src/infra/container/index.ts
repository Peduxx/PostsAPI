import { container } from "tsyringe";

import { IPostRepository } from "../../api/repositories/interfaces/IPostRepository";
import { PostRepository } from "../../api/repositories/PostRepository";

container.registerSingleton<IPostRepository>(
  "PostRepositories",
  PostRepository
);
