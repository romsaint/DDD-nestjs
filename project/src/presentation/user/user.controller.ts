import { Controller, Get, Inject } from '@nestjs/common';
import { UserService } from '@UserService';
import { UserProviderName } from '@UserServiceProvider';

@Controller('user')
export class UserController {
  constructor(
    @Inject(UserProviderName.USERS_SERVICE) private readonly userService: UserService
  ) {}

  @Get('all')
  getAll() {
    return this.userService.getAll()
  }

  @Get('')
  async get() {
    return 52
  }
}