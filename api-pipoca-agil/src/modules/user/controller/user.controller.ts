import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserService } from '../service/createUser.service';

@Controller('user')
export class UserController {
  constructor(private readonly appService: CreateUserService) {}

  @Post()
  async createUser(@Body() body) {
    await this.appService.create(body);
  }
}
