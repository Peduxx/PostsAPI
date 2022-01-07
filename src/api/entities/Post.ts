import { v4 as uuidV4 } from "uuid";
import { PostLike } from "./PostLike";

class Post {
  id?: string;
  //userId
  content: string;
  postLikes: PostLike;
  postLikesNumber: number;
  postComments: Post;
  postCommentNumber: number;
  created_at: Date;
  deleted_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Post };