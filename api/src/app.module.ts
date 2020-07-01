import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersModule } from './users/users.module';
import { Connection } from 'typeorm';
import { User } from './users/User';
import { Account } from 'src/accounts/Account';
import { Type } from 'src/types/Type';
import { AccountsModule } from './accounts/accounts.module';
import { TypesModule } from './types/types.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'password',
    database: 'postgres',
    entities: [User, Account, Type],
    synchronize: false,
  }), UsersModule, AccountsModule, TypesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection){}
}
