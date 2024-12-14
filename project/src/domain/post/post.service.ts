import { Injectable } from "@nestjs/common";
import { PostSchema } from "src/infrastructure/database/mongodb/post/post.schema";
import { IPostService } from "./interfaces/post.service.interface";
import { EventEmitter2, OnEvent } from "@nestjs/event-emitter";

@Injectable()
export class PostService implements IPostService {
    constructor(
        private readonly eventEmitter2: EventEmitter2
    ) {}

    @OnEvent('post.getPosts')
    async getPosts(): Promise<PostSchema[]>{
        const data = (await this.eventEmitter2.emitAsync('post.repo.getPosts'))

        return data
    }

    @OnEvent('post.createTestPosts')
    async createPosts(): Promise<PostSchema> {
        return (await this.eventEmitter2.emitAsync('post.repo.createTestPosts'))[0]
    }
}