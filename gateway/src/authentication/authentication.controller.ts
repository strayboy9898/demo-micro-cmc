import {Body, Controller, Get, HttpStatus, Inject, Post, Res} from "@nestjs/common";
import { GatewayAuthenticationService } from "./authentication.service";
import {ClientProxy, RpcException} from "@nestjs/microservices";
import {LoginDto} from "./dto/login.dto";
import { Response } from 'express';
import {SignupDto} from "./dto/signup.dto";

@Controller('/gateway/authentication')
export class GatewayAuthenticationController {
  constructor(
      @Inject("AUTH_SERVICE") private readonly authenticationService: ClientProxy,
      private readonly gatewayAuthenticationService: GatewayAuthenticationService
  ) {}

  @Get("/")
  pingServiceA() {
    console.log('check get gateway');
    return this.gatewayAuthenticationService.pingServiceA();
  }

  @Post("/")
  loginGateway(@Body() loginDto: LoginDto) {
    console.log(loginDto);
    const pattern = { cmd: "login" };
    return this.authenticationService.send(pattern, loginDto);
  }

  @Post("/sign_up")
  signupGateway(@Body() signupDto: SignupDto) {
    console.log(signupDto);
    const pattern = { cmd: "sign_up" };
    return this.authenticationService.send(pattern, signupDto);
  }
}