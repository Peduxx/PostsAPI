import { v4 as uuidV4 } from "uuid";
import { Entity, PrimaryColumn, Column, CreateDateColumn, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { PostLike } from "./PostLike";
import { PostComment } from "./PostComment";
import { User } from "./User";

@Entity("Post")
class Post {

  @PrimaryColumn()
  id?: string;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @Column()
  content: string;

  @ManyToOne(() => Post, post => post.postLikes)
  postLikes: PostLike;

  @Column()
  postLikesNumber: number;

  @ManyToOne(() => Post, post => post.postComments)
  postComments: PostComment;

  @Column()
  postCommentNumber: number;

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

export { Post };