import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(data: CreateUserDto): Promise<{
        email: string;
        name: string;
        password: string;
        id: string;
    }>;
    findAll(req: any): Promise<{
        email: string;
        name: string;
        password: string;
        id: string;
    }[]>;
    findOne(id: string): Promise<{
        email: string;
        password: string;
        id: string;
    }>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        email: string;
        name: string;
        password: string;
        id: string;
    }>;
    remove(id: string): Promise<{
        email: string;
        name: string;
        password: string;
        id: string;
    }>;
}
