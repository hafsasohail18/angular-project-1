import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITodo } from '../../../core/model/todo.models';
import { TodoService } from '../../../core/services/todo.service';

export type ITodoType = 'OPEN' | 'PROGRESS' | 'TESTING' | 'DONE' ; 
export const ITodoStatus = ['OPEN', 'PROGRESS', 'TESTING', 'DONE'];

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.css'
})
export class TodoCardComponent {

  @Input() type: ITodoType = 'OPEN';
  @Input() todo!: ITodo; 
  @Output() todoDeleted = new EventEmitter<ITodo>();

  onClickDelete(todo: ITodo) {

    console.log("clicked...", todo)
    this.todoDeleted.emit(this.todo);
  }

}
