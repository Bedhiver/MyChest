import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './User';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Get()
    getAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Post('/create')
    createUser(@Body() user: User): Promise<void> {
        return this.userService.create(user);
    }
}
