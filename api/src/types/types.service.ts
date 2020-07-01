import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';
import { Type } from './Type';

@Injectable()
export class TypesService {
    constructor(
        @InjectRepository(Type)
        private typeRepository: Repository<Type>,
    ) {}

    findAll(): Promise<Type[]> {
        return this.typeRepository.find();
    }

    findOne(id: string): Promise<Type> {
        return this.typeRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.typeRepository.delete(id);
    }

    async create(type: Type): Promise<void> {
        await this.typeRepository.insert(type);
    }

}
