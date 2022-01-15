import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Body,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './interfaces/todo.interface';

@ApiTags('todos')
@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Get()
  @ApiOperation({
    summary: 'get todos list',
  })
  async getTodos() {
    try {
      return this.todosService.getTodos();
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Post()
  @ApiOperation({
    summary: 'create new todo',
  })
  async createTodo(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
    try {
      return this.todosService.createTodo(createTodoDto);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':todoId')
  @ApiOperation({
    summary: 'delete todo by id',
  })
  async deleteTodo(@Param('todoId') todoId: string): Promise<Todo> {
    try {
      return this.todosService.deleteTodo(todoId);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Patch(':todoId')
  @ApiOperation({
    summary: 'update todo by id',
  })
  async updateTodo(
    @Param('todoId') todoId: string,
    @Body() updateTodoDto: UpdateTodoDto,
  ): Promise<Todo> {
    try {
      return this.todosService.updateTodo(todoId, updateTodoDto);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }
}
