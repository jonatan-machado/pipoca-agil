import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { CreateUserService } from './service/createUser.service';
import { RemovePassword } from './helpers/removePassword';
import { Cript } from './helpers/cript';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/users.entity';
import UserRepository from './repository/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [CreateUserService, UserRepository, RemovePassword, Cript],
  controllers: [UserController],
})
export class UserModule {}
