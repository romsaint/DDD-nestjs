import { PostSchema} from "src/infrastructure/database/mongodb/post/post.schema"

export interface IPostService {
    getPosts(id: number): Promise<PostSchema[]>
    createPosts(id: number): Promise<PostSchema>
}