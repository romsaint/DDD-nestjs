import { Inject, Injectable } from "@nestjs/common";
import { IPostRepo } from "@IPostRepo";
import { PostSchema } from "src/infrastructure/database/mongodb/post/post.schema";
import { IPostService } from "./interfaces/post.service.interface";
import { PostMongoDBRepoProviderName } from "src/infrastructure/providers/postMongoRepo.provider";

@Injectable()
export class PostService implements IPostService {
    constructor(
        @Inject(PostMongoDBRepoProviderName.POST_MONGO_REPOSITORY) private readonly postMongoRepo: IPostRepo
    ) {}

    async getPosts(id: number): Promise<PostSchema[]> {
        return await this.postMongoRepo.getPosts(id)
    }
    async createPosts(id: number): Promise<PostSchema> {
        return await this.postMongoRepo.createPosts(id)
    }
}