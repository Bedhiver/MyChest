import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from './Account';
import { Repository } from 'typeorm';

@Injectable()
export class AccountsService {
    constructor(
        @InjectRepository(Account)
        private accountsRepository: Repository<Account>,
    ){}

    findAll(): Promise<Account[]> {
        return this.accountsRepository.find();
    }

    findOne(id: string): Promise<Account> {
        return this.accountsRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.accountsRepository.delete(id);
    }

    async create(account: Account): Promise<void> {
        await this.accountsRepository.insert(account);
    }
}
