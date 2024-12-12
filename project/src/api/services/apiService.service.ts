import { Injectable } from "@nestjs/common";
import { IApiService } from "../interfaces/apiService.interface";
import { EventEmitter2, OnEvent } from "@nestjs/event-emitter";

@Injectable()
export class ApiService implements IApiService {
    constructor(
        private readonly eventEmitter2: EventEmitter2
    ) { }

    @OnEvent('post.getPosts')
    async getPosts(id: number) {
        return (await this.eventEmitter2.emitAsync('post.getPosts'))[0]
    }
}