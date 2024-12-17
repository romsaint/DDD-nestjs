import { Body, Controller, Get, ParseIntPipe, Post, Query } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Controller('user')
export class UserController {
  constructor(
    private readonly eventEmitter2: EventEmitter2
  ) {}

  @Get()
  async getUserById(@Query('id', ParseIntPipe) id: number) {
    const data = (await this.eventEmitter2.emitAsync('user.getById', id))[0]
    
    return data
  }
  
  @Get('getAll')
  async getAll() {
    const data = (await this.eventEmitter2.emitAsync('user.getAll'))[0]
    
    return data
  }
}