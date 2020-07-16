import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService) { }

    async validateUser(userEmail: string, password: string): Promise<any> {
        const user = await this.userService.findOne(userEmail);
        if (user && user.passwordUser === password) {
            const { passwordUser, ...result } = user;
            return result;
        }
        return null;
    }
}
