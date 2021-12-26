import { Injectable } from '@nestjs/common';
//import { UsersService } from '';
import { JwtService } from '@nestjs/jwt';
import {InjectRepository} from "@nestjs/typeorm";
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class AuthService {
  constructor(
      // private usersService: UsersService,
      @InjectRepository(User)
      private usersRepository: Repository<User>,
      private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersRepository.findOne({
      where: {username}
    });
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User) {
    const payload = { username: user.username, isAdmin: user.isAdmin };
    const data = await this.validateUser(user.username, user.password);
    if(data) {
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
    return null;
  }

  async signUp(user: User) { //todo
    const data = await this.usersRepository.create(user);
    await this.usersRepository.save(data);
    return data;
  }
}