import { Injectable, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

@Injectable()
export class GatewayAuthenticationService {
  constructor(
      @Inject("AUTH_SERVICE") private readonly clientServiceA: ClientProxy
  ) {}

  pingServiceA() {
    const pattern = { cmd: "ping" };
    const payload = {
      bi: 'abc'
    };
    console.log("check service gateway");
    return this.clientServiceA.send<string>(pattern, payload);
  }
}