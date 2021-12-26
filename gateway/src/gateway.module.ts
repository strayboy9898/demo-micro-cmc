import { Module } from "@nestjs/common";
import { AuthenticationModule } from './authentication/authentication.module';
import { StorageModule } from './storage/storage.module';

@Module({
  imports: [
    AuthenticationModule,
    StorageModule
  ],
})
export class GatewayModule {}