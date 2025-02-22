import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../database/prisma.service';
export declare class UsersService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findOneWithPassword(email: string): void;
    create(data: CreateUserDto): Promise<{
        email: string;
        name: string;
        password: string;
        id: string;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        email: string;
        name: string;
        password: string;
        id: string;
    }[]>;
    findOneOrFail(conditions: {
        [key: string]: any;
    }, options?: {
        select?: Record<string, boolean>;
    }): Promise<{
        email: string;
        password: string;
        id: string;
    }>;
    update(id: string, data: UpdateUserDto): Promise<{
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
