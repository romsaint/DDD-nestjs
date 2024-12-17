import { InjectModel } from "@nestjs/mongoose";
import { PostSchema } from "./post.schema";
import { IPostRepo } from "@IPostRepo";
import { Model } from "mongoose";
import { CreatePostEntity } from "src/domain/post/entities/createPost.entity";
import { OnEvent } from "@nestjs/event-emitter";


export class MongoPostRepository implements IPostRepo {
    constructor(
        @InjectModel('Post') private readonly postMongo: Model<PostSchema>
    ) {}

    @OnEvent('post.repo.getPosts')
    async getPosts(): Promise<PostSchema[]> {
        try{
            return await this.postMongo.find()
        }catch(e) {
            throw new Error(e)
        }
    }

    @OnEvent('post.repo.createTestPost')
    async createPosts(): Promise<PostSchema> {
        try{
            const post: CreatePostEntity = {text: 'Hello', user_id: 1}

            return await this.postMongo.create(post)
        }catch(e) {
            throw new Error(e)
        }
    }
}