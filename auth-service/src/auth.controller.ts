import {Controller, Res} from "@nestjs/common";
import { MessagePattern, RpcException } from "@nestjs/microservices";
import {AuthService} from "./auth.service";
import {User} from "./user.entity";

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern({ cmd: "ping" })
  ping(input?: object): any {
    console.log("ping auth-service");
    return input
  }

  @MessagePattern({ cmd: "login" })
  login(user?: User): any {
    console.log(user);
    const data = this.authService.login(user);
    if(data) return data;
    throw new RpcException('Invalid credentials.');
  }

  @MessagePattern({ cmd: "sign_up" })
  signUp(user?: User): any {
    console.log(user);
    return this.authService.signUp(user);
    // if(data) return data;
    // throw new RpcException('Invalid credentials.');
  }
}