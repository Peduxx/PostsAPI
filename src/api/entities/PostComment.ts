import { v4 as uuidV4 } from "uuid";
import { Entity, PrimaryColumn, Column, CreateDateColumn, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { PostLike } from "./PostLike";
import { User } from "./User";

@Entity("PostComment")
class PostComment {

  @PrimaryColumn()
  id?: string;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @Column()
  content: string;

  @ManyToOne(() => PostComment, postComment => postComment.postLikes)
  postLikes: PostLike;

  @Column()
  postLikesNumber: number;

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

export { PostComment };