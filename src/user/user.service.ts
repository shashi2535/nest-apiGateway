import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { IHeroesService } from 'src/proto-types/src/proto/user';

@Injectable()
export class UserService implements OnModuleInit {
  private usersService: IHeroesService;
  constructor(@Inject('hero') private client: ClientGrpc) {}
  onModuleInit() {
    this.usersService = this.client.getService<IHeroesService>('HeroesService');
  }
  async getHello() {
    console.log('in app service in api gateway');
    return await this.usersService.FindOne({ id: 1 });
  }
}
