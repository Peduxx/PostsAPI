import { Post } from "api/entities/Post";
import { IPostRequestDTO } from "../DTOs/IPostRequestDTO";

class PostService{
    execute({ content }: IPostRequestDTO) : Post{
       const post : Post = {
           id: '1',
           content: content,
           postLikes: null,
           postLikesNumber: 0,
           postComments: null,
           postCommentNumber: 0,
           created_at: new Date(),
           deleted_at: new Date()
       }

       return post;
    }
}

export { PostService }