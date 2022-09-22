import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/app/users/users.module';
import { AuthService } from './auth.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    PassportModule,
    JwtModule.register({
      privateKey: '6ycNSv97/x2i7NjqBNVXlo6gbBW8in9urdFueG6AQ8k=', // Comend generated terminal: #openssl rand -base64 32
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService],
})
export class AuthModule {}
