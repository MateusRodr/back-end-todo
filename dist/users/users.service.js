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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma.service");
const bcrypt_1 = require("bcrypt");
let UsersService = class UsersService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    findOneWithPassword(email) {
        throw new Error('Method not implemented.');
    }
    async create(data) {
        const userExists = await this.prismaService.user.findFirst({
            where: {
                email: data.email
            }
        });
        if (userExists) {
            throw new common_1.ConflictException('user already exists!');
        }
        const hashPassword = (0, bcrypt_1.hashSync)(data.password, 10);
        data.password = hashPassword;
        const user = await this.prismaService.user.create({ data });
        return user;
    }
    findAll() {
        return this.prismaService.user.findMany();
    }
    async findOneOrFail(conditions, options) {
        const user = await this.prismaService.user.findFirst({
            where: conditions,
            select: { id: true, email: true, password: true },
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return user;
    }
    async update(id, data) {
        const userExists = await this.prismaService.user.findUnique({
            where: {
                id,
            },
        });
        if (!userExists) {
            throw new Error('user does not exists!');
        }
        return await this.prismaService.user.update({
            data,
            where: {
                id,
            },
        });
    }
    async remove(id) {
        const userExists = await this.prismaService.user.findUnique({
            where: {
                id,
            },
        });
        if (!userExists) {
            throw new Error('user does not exists!');
        }
        return await this.prismaService.user.delete({
            where: {
                id
            }
        });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map