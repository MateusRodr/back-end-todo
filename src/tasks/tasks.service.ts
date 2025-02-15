import { Injectable } from "@nestjs/common";
import { PrismaService } from "../database/prisma.service";
import { CreateTaskDto } from "./dto/create-task";
import { UpdateTaskDto } from "./dto/update-task";

@Injectable()
export class TaskService {
  constructor(private readonly Prisma: PrismaService) {}

  async create(data: CreateTaskDto, userId: string) {
    return await this.Prisma.task.create({
      data: {
        title: data.title,
        status: data.status ?? "pending",
        category: data.category,
        completed: data.completed ?? false,
        userId
      }
    });
  }

  async findAll(userId: string) {
    return await this.Prisma.task.findMany({
      where: { userId }
    });
  }

  async findOneOrFail(id: string) {
    const task = await this.Prisma.task.findUnique({
      where: { id }
    });
    if (!task) {
      throw new Error('Task not found');
    }
    return task;
  }

  async update(id: string, data: UpdateTaskDto) {
    const taskExists = await this.Prisma.task.findUnique({
      where: { id }
    });
    if (!taskExists) {
      throw new Error('task not found');
    }
    return await this.Prisma.task.update({
      data,
      where: { id }
    });
  }

  async remove(id: string) {
    const taskExists = await this.Prisma.task.findUnique({
      where: { id }
    });
    if (!taskExists) {
      throw new Error('Task not found');
    }
    return await this.Prisma.task.delete({
      where: { id }
    });
  }
}
