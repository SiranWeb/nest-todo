import { Injectable } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { generateId } from '../../common/utils';

@Injectable()
export class TodosService {
  private todos: Todo[] = [];

  private findTodoIndexById(todoId: string): number {
    return this.todos.findIndex((todo) => todo.id === todoId);
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  createTodo(createTodoDto: CreateTodoDto): Todo {
    const todo: Todo = { id: generateId(), ...createTodoDto };
    this.todos.push(todo);
    return todo;
  }

  deleteTodo(todoId: string): Todo {
    const index = this.findTodoIndexById(todoId);

    if (index === -1) {
      throw new Error(`Todo with id "${todoId}" not found`);
    }

    const removedItem = { ...this.todos[index] };
    this.todos.splice(index, 1);
    return removedItem;
  }

  updateTodo(todoId: string, updateTodoDto: UpdateTodoDto): Todo {
    const index = this.findTodoIndexById(todoId);

    if (index === -1) {
      throw new Error(`Todo with id "${todoId}" not found`);
    }

    this.todos[index] = { ...this.todos[index], ...updateTodoDto };
    return this.todos[index];
  }
}
