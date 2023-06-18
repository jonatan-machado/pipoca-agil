import { Module } from '@nestjs/common';
import { AuthService } from './service/auth.service';
import { Cript } from '../../helpers/crypt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../user/entity/users.entity';
import UserRepository from '../user/repository/user.repository';
import { AuthController } from './controller/auth.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [AuthService, UserRepository, Cript],
  controllers: [AuthController],
})
export class AuthModule {}
