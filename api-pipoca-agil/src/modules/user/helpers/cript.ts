import * as bcrypt from 'bcrypt';

export class Cript {
  static async passHash(password: string) {
    const pass = password;
    console.log(password);
    const hashPass = await bcrypt.hashSync(pass, 11);
    return hashPass;
  }

  static async Passcompare(password: string, hash: string) {
    return await bcrypt.compare(password, hash);
  }
}
