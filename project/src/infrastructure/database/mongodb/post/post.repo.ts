import { InjectModel } from "@nestjs/mongoose";
import { PostSchema } from "./post.schema";
import { IPostRepo } from "@IPostRepo";
import { Model } from "mongoose";
import { CreatePostEntity } from "src/domain/post/entities/createPost.entity";


export class MongoPostRepository implements IPostRepo {
    constructor(
        @InjectModel('Post') private readonly postMongo: Model<PostSchema>
    ) {}

    async getPosts(id: number): Promise<PostSchema[]> {
        
        return await this.postMongo.find()
    }

    async createPosts(id: number): Promise<PostSchema> {
        const post: CreatePostEntity = {text: 'Hello', user_id: 1}

        return await this.postMongo.create(post)
    }
}