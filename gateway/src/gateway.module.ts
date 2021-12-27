import { Module } from "@nestjs/common";
import { AuthenticationModule } from './authentication/authentication.module';
import { StorageModule } from './storage/storage.module';
import {ConfigModule} from "@nestjs/config";
import {JwtStrategy} from "./jwt.strategy";
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.gateway.env',
    }),
    JwtModule.register({
      secret: process.env.secretKeyJWT || 'micro_cmc',
      signOptions: { expiresIn: '60s' },
    }),
    AuthenticationModule,
    StorageModule
  ],
  providers: [JwtStrategy],
})
export class GatewayModule {}