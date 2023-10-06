import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { UserController } from './user.controller';
import { UserService } from './user.service';
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'hero',
        transport: Transport.GRPC,
        options: {
          package: 'hero',
          protoPath: join(__dirname, '../../src/proto/user.proto'),
        },
      },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
