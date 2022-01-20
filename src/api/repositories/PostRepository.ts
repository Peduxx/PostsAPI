import { Post } from "api/entities/Post";
import { getRepository, Repository } from "typeorm";
import { IPostRepository } from "./IPostRepository";


class PostRepository implements IPostRepository {
  private repository: Repository<Post>;

  constructor() {
    this.repository = getRepository(Post);
  }

  async create(content: string): Promise<void> {
    const post = this.repository.create({
        content
    });

    await this.repository.save(post);
  }
}

export { PostRepository };
