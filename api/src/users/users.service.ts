import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './User';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ){}

    findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    findOne(userEmail: string): Promise<User> {
        return this.usersRepository.findOne(userEmail);
    }

    async remove(id: string): Promise<void> {
        await this.usersRepository.delete(id);
    }

    async create(user: User): Promise<void> {
        await this.usersRepository.insert(user);
    }



    }
