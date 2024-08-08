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
    }, 
    {
      id: 3, 
      title: 'Todo Title3', 
      description: 'Todo description', 
      status: 'PROGRESS',
    }
  ]

  constructor() { }

  getAllTodo() {
    return this.todos; 
  }
}
