import { Post } from "api/entities/Post";
import { IPostRepository } from "api/repositories/IPostRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
    content: string;
}

@injectable()
class PostService{

    constructor(
    @inject("PostRepository")
    private postRepository: IPostRepository
    ) {}

    async execute({ content }: IRequest) : Promise<Post>{

        const post = this.postRepository.create(content);

        return post;
    }
}

export { PostService }