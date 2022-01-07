import { Request, Response } from 'express';
import { PostService } from '../services/PostService'

class PostController {
    handle(request: Request, response: Response){

        const { content } = request.body;

        const postService = new PostService();

        const post = postService.execute({
            content
        });

        return response.json(post);
    }
}

export { PostController }