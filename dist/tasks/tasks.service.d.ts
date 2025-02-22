import { PrismaService } from "../database/prisma.service";
import { CreateTaskDto } from "./dto/create-task";
import { UpdateTaskDto } from "./dto/update-task";
export declare class TaskService {
    private readonly Prisma;
    constructor(Prisma: PrismaService);
    create(data: CreateTaskDto, userId: string): Promise<{
        id: string;
        title: string;
        completed: boolean;
        status: string;
        category: string | null;
        createAtt: Date;
        userId: string;
        description: string | null;
    }>;
    findAll(userId: string): Promise<{
        id: string;
        title: string;
        completed: boolean;
        status: string;
        category: string | null;
        createAtt: Date;
        userId: string;
        description: string | null;
    }[]>;
    findOneOrFail(id: string): Promise<{
        id: string;
        title: string;
        completed: boolean;
        status: string;
        category: string | null;
        createAtt: Date;
        userId: string;
        description: string | null;
    }>;
    update(id: string, data: UpdateTaskDto): Promise<{
        id: string;
        title: string;
        completed: boolean;
        status: string;
        category: string | null;
        createAtt: Date;
        userId: string;
        description: string | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        title: string;
        completed: boolean;
        status: string;
        category: string | null;
        createAtt: Date;
        userId: string;
        description: string | null;
    }>;
}
