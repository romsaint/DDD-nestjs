import { Controller, Get, Inject, ParseIntPipe, Query } from '@nestjs/common';
import { apiServiceProviderName } from 'src/api/services/providers/apiService.provider';
import { ApiService } from 'src/api/services/apiService.service';
import { IApiService } from 'src/api/interfaces/apiService.interface';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Controller('post')
export class PostController {
  constructor(
    private readonly eventEmitter2: EventEmitter2
  ) {}

  @Get()
  async getPosts(@Query('id', ParseIntPipe) id: number) {
    return (await this.eventEmitter2.emitAsync('post.getPosts', {id}))[0]
  }
}