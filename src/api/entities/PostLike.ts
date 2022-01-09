import { v4 as uuidV4 } from "uuid";
import { Entity, PrimaryColumn, Column, CreateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { User } from "./User";
import { Post } from "./Post";

@Entity("PostLike")
class PostLike{

    @PrimaryColumn()
    id?: string;

    @OneToOne(() => User)
    @JoinColumn()
    user: User;

    @OneToOne(() => User)
    @JoinColumn()
    post: Post;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    deleted_at: Date;

    constructor() {
        if (!this.id) {
          this.id = uuidV4();
        }
      }
}

export { PostLike }