import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { IUserService } from 'src/proto-types/src/proto/user';

@Injectable()
export class UserService implements OnModuleInit {
  private usersService: IUserService;
  constructor(@Inject('user') private client: ClientGrpc) {}
  onModuleInit() {
    this.usersService = this.client.getService<IUserService>('UserService');
  }
  async createUser(createUserDto) {
    try {
      const data = await this.usersService.Signup(createUserDto);
      console.log('in app service in api gateway', data);
      return data;
    } catch (err) {
      console.log('err in api gatredfd', err);
    }
  }
}
