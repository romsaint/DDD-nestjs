import { Post } from "./post.entity";

export interface IPostRepo {
    createPost(post: Post): string
    getPost(id: number): Post
}