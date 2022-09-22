import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/app/users/users.module';
import { AuthService } from './auth.service';

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, PassportModule],
  providers: [AuthService],
})
export class AuthModule {}
