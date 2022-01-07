import { v4 as uuidV4 } from "uuid";
import { User } from "./User";

class PostLike{
    id: string;
    //userId
    //postId
    created_at: Date;
    deleted_at: Date;

    constructor() {
        if (!this.id) {
          this.id = uuidV4();
        }
      }
}

export { PostLike }