import { ConflictException, Injectable, NotFoundException, Options } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../database/prisma.service';
import { hashSync } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService:PrismaService){}

  findOneWithPassword(email: string) {
    throw new Error('Method not implemented.');
  }


 async create(data: CreateUserDto) {

  const userExists = await this.prismaService.user.findFirst({
    where:{
      email: data.email
    }
  })

  if(userExists){
    throw new ConflictException('user already exists!')
  }

  const hashPassword = hashSync(data.password,10);
  data.password = hashPassword;

  const user = await this.prismaService.user.create({data})

    return user;
  }

  findAll() {
    return this.prismaService.user.findMany();
  }

  async findOneOrFail(
    conditions: { [key: string]: any }, 
    options?: { select?: Record<string, boolean> }, 
  ) {
    const user = await this.prismaService.user.findFirst({
      where: conditions,
      select: { id: true, email: true, password: true },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
  async update(id: string, data: UpdateUserDto) {
    const userExists = await this.prismaService.user.findUnique({
      where:{
        id,
      },
    })
    if(!userExists){
      throw new Error('user does not exists!')
    }
    return await this.prismaService.user.update({
      data,
      where:{
        id,
      },
    });
  }

  async remove(id: string) {
    const userExists = await this.prismaService.user.findUnique({
      where:{
        id,
      },
    });
    if(!userExists){
      throw new Error('user does not exists!')
    }
    return await this.prismaService.user.delete({
      where:{
        id
      }
    });
  }
}
