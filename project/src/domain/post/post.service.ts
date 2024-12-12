import { Inject, Injectable } from "@nestjs/common";
import { IPostRepo } from "@IPostRepo";
import { PostSchema } from "src/infrastructure/database/mongodb/post/post.schema";
import { IPostService } from "./interfaces/post.service.interface";
import { PostMongoDBRepoProviderName } from "src/infrastructure/providers/postMongoRepo.provider";
import { MongoPostRepository } from "src/infrastructure/database/mongodb/post/post.repo";
import { OnEvent } from "@nestjs/event-emitter";

@Injectable()
export class PostService implements IPostService {
    constructor(
        @Inject(PostMongoDBRepoProviderName.POST_MONGO_REPOSITORY) private readonly postMongoRepo: IPostRepo
    ) {}

    @OnEvent('post.getPosts')
    async getPosts(id: number): Promise<PostSchema[]>{
        const data = await this.postMongoRepo.getPosts(id)

        return data
    }

    @OnEvent('post.createPosts')
    async createPosts(id: number): Promise<PostSchema> {
        return await this.postMongoRepo.createPosts(id)
    }
}