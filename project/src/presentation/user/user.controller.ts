import { Controller, Get, Inject, ParseIntPipe, Query } from '@nestjs/common';
import { apiServiceProviderName } from 'src/api/services/providers/apiService.provider';
import { ApiService } from 'src/api/services/apiService.service';
import { IApiService } from 'src/api/interfaces/apiService.interface';

@Controller('user')
export class UserController {
  constructor(
    @Inject(apiServiceProviderName.API_SERVICE) private readonly apiService: IApiService
  ) {}

  @Get()
  async getPosts(@Query('id', ParseIntPipe) id: number) {
    return await this.apiService.getPosts(id)
  }
}