import { Post } from "api/entities/Post";

interface IPostRepository{
    create(content: string) : Promise<Post>;
}

export { IPostRepository }