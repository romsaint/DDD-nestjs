import { HttpException, Injectable } from "@nestjs/common";
import { PostSchema } from "src/infrastructure/database/mongodb/post/post.schema";
import { IPostService } from "./interfaces/post.service.interface";
import { EventEmitter2, OnEvent } from "@nestjs/event-emitter";

@Injectable()
export class PostService implements IPostService {
    constructor(
        private readonly eventEmitter2: EventEmitter2
    ) { }

    @OnEvent('post.getPosts')
    async getPosts(): Promise<PostSchema[]> {
        try {
            const data = (await this.eventEmitter2.emitAsync('post.repo.getPosts'))

            return data ? data[0] : null
        } catch (e) {
            throw new HttpException(e.status || 500, e.message || 'Unexpected error :(')
        }

    }

    @OnEvent('post.createTestPost')
    async createPosts(): Promise<PostSchema> {
        try {
            return (await this.eventEmitter2.emitAsync('post.repo.createTestPost'))[0] as PostSchema
        } catch (e) {
            throw new HttpException(e.status || 500, e.message || 'Unexpected error :(')
        }
    }
}