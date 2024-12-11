import { Controller, Get, Inject, ParseIntPipe, Query } from '@nestjs/common';
import { ApiService } from 'src/api/services/apiService.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly apiService: ApiService
  ) {}

  @Get()
  async getPosts(@Query('id', ParseIntPipe) id: number) {
    return await this.apiService.getPosts(id)
  }
}