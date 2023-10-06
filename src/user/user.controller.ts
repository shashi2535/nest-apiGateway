import { Body, Controller, Post } from '@nestjs/common';
import { UserCreateDto } from './dto/createUser.dto';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly appService: UserService) {}
  @Post('/signup')
  async createUser(@Body() createUserDto: UserCreateDto) {
    console.log('app service');
    return this.appService.createUser(createUserDto);
  }
}
