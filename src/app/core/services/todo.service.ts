import { Injectable } from '@angular/core';
import { ITodo } from '../model/todo.models';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: ITodo[] = [
    {
      id: 1, 
      title: 'Todo Title', 
      description: 'Todo description', 
      status: 'OPEN',

    }, 
    {
      id: 2, 
      title: 'Todo Title2', 
      description: 'Todo description', 
      status: 'DONE',

    }
  ]

  constructor() { }

  getAllTodo() {
    return this.todos; 
  }
}
