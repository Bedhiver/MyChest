import { Module } from '@nestjs/common';
import { TypesService } from './types.service';
import { TypesController } from './types.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Type } from './Type';

@Module({
  imports: [TypeOrmModule.forFeature([Type])],
  providers: [TypesService],
  controllers: [TypesController]
})
export class TypesModule {}
