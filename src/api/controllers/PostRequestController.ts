import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { PostService } from '../services/PostService'

class PostController {
    async handle(request: Request, response: Response){
        const { content } = request.body;

        const postService = container.resolve(PostService);

        const post = await postService.execute({
            content
        });

        return response.status(202).json(post);
    }
}

export { PostController }