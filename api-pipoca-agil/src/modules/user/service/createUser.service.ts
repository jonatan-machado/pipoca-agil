import { Injectable } from '@nestjs/common';
import { IUser } from '../interface/user.interface';
import { Cript } from '../helpers/cript';
import UserRepository from '../repository/user.repository';
import { RemovePassword } from '../helpers/removePassword';

@Injectable()
export class CreateUserService {
  constructor(
    private userRepository: UserRepository,
    private readonly removePassword: RemovePassword,
  ) {}
  async create(body: IUser) {
    const password = body.password;
    console.log(password);
    const passCrypt = await Cript.passHash(password);
    const user = { ...body, password: passCrypt, confirm_password: '' };
    await this.userRepository.save(user);
    const userWithoutPass = this.removePassword.getUser(user);
    return userWithoutPass;
  }
}
