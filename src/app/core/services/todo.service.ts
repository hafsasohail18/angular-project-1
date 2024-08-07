import { Injectable } from '@angular/core';
import { ITodo } from '../model/todo.models';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: ITodo[] = [
    {
      id: 1, 
      title: 'Test Title', 
      description: 'description random', 
      status: 'OPEN',

    }
  ]

  constructor() { }

  getAllTodo() {
    return this.todos; 
  }
}
