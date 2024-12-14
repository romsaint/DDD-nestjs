import { Body, Controller, Get, Inject, ParseIntPipe, Post, Query } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { UserDTO } from '@UserDTO';

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

  @Post('save')
  async saveUser(@Body() user: UserDTO) {
    const data = (await this.eventEmitter2.emitAsync('user.save', user))[0]
    
    return data
  }
}