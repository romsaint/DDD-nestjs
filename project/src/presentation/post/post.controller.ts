import { Controller, Get, HttpException, Post } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Controller('post')
export class PostController {
  constructor(
    private readonly eventEmitter2: EventEmitter2
  ) { }

  @Get()
  async getPosts() {
    try {
      return (await this.eventEmitter2.emitAsync('post.getPosts'))[0];
    } catch (e) {
      throw new HttpException(e.status || 500, e.message || 'Unexpected error :(');
    }
  }

  @Post('test-create')
  async createPost() {
    try {
      return (await this.eventEmitter2.emitAsync('post.createTestPost'))[0];
    } catch (e) {
      throw new HttpException(e.status || 500, e.message || 'Unexpected error :(');
    }
  }
}