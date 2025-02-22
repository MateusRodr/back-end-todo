"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma.service");
let TaskService = class TaskService {
    constructor(Prisma) {
        this.Prisma = Prisma;
    }
    async create(data, userId) {
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
    async findAll(userId) {
        return await this.Prisma.task.findMany({
            where: { userId }
        });
    }
    async findOneOrFail(id) {
        const task = await this.Prisma.task.findUnique({
            where: { id }
        });
        if (!task) {
            throw new Error('Task not found');
        }
        return task;
    }
    async update(id, data) {
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
    async remove(id) {
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
};
exports.TaskService = TaskService;
exports.TaskService = TaskService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TaskService);
//# sourceMappingURL=tasks.service.js.map