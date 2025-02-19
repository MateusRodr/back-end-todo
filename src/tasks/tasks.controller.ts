import { Controller, Post, Get, Body, Param, Put, Delete, UseGuards, Req, Patch } from "@nestjs/common";
import { TaskService } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task";
import { UpdateTaskDto } from "./dto/update-task";
import { AuthGuard } from '@nestjs/passport';

@Controller('api/tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async createTask(@Body() data: CreateTaskDto, @Req() req: any) {
    const userId = req.user.id;
    return await this.taskService.create(data, userId);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async findAll(@Req() req: any) {
    const userId = req.user.id;
    return await this.taskService.findAll(userId);
  }

  @Get(':id')
  async findOneOrFail(@Param('id') id: string) {
    return await this.taskService.findOneOrFail(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async update(@Param('id') id: string, @Body() data: UpdateTaskDto) {
    return await this.taskService.update(id, data);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  async partialUpdate(@Param('id') id: string, @Body() data: UpdateTaskDto) {
    return await this.taskService.update(id, data);
  }
  
  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.taskService.remove(id);
  }
}
