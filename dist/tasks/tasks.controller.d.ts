import { TaskService } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task";
import { UpdateTaskDto } from "./dto/update-task";
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    createTask(data: CreateTaskDto, req: any): Promise<{
        id: string;
        title: string;
        completed: boolean;
        status: string;
        category: string | null;
        createAtt: Date;
        userId: string;
        description: string | null;
    }>;
    findAll(req: any): Promise<{
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
    partialUpdate(id: string, data: UpdateTaskDto): Promise<{
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
