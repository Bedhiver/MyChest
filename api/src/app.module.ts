import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersModule } from './users/users.module';
import { User } from './users/User';
import { Account } from 'src/accounts/Account';
import { Type } from 'src/types/Type';
import { AccountsModule } from './accounts/accounts.module';
import { TypesModule } from './types/types.module';
import { AuthModule } from './auth/auth.module';


const typeOrmHost = process.env.TYPEORM_HOST || 'localhost'

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: typeOrmHost,
    port: 5432,
    username: 'postgres',
    password: 'password',
    database: 'postgres',
    entities: [User, Account, Type],
    synchronize: false,
  }), UsersModule, AccountsModule, TypesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
