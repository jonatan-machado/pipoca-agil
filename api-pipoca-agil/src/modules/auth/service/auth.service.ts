import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Cript } from '../../../helpers/crypt';
import UserRepository from '../../user/repository/user.repository';

@Injectable()
export class AuthService {
  constructor(private userRepository: UserRepository) {}
  async login(body) {
    const { email, password } = body;
    const user = await this.userRepository.findByEmail(email);
    if (user === null) {
      console.log(user);
      throw new HttpException('Login failed', HttpStatus.FORBIDDEN);
    }
    const isMatch = await Cript.Passcompare(password, user.password);
    if (!isMatch) {
      throw new HttpException('Login failed', HttpStatus.FORBIDDEN);
    }
    return user;
  }
}
