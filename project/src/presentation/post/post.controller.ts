import { Controller, Get, Inject, ParseIntPipe, Post, Query } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Controller('post')
export class PostController {
  constructor(
    private readonly eventEmitter2: EventEmitter2
  ) {}

  @Get()
  async getPosts() {
    return (await this.eventEmitter2.emitAsync('post.getPosts'))[0]
  }

  @Post('test-create')
  async createPost() {
    return (await this.eventEmitter2.emitAsync('post.createTestPosts'))[0]
  }
}