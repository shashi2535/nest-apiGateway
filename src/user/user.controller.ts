import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly appService: UserService) {}
  @Get()
  async getHello() {
    console.log('app service');
    return this.appService.getHello();
  }
}
