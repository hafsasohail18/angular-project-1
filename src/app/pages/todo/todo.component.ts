import { Component, OnInit } from '@angular/core';
import { TodoCardComponent, ITodoStatus } from '../../shared/components/todo-card/todo-card.component';
import { ITodo } from '../../core/model/todo.models';
import { TodoService } from '../../core/services/todo.service';
import { SlidePanelComponent } from '../../shared/ui/slide-panel/slide-panel.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [TodoCardComponent, SlidePanelComponent, ReactiveFormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {
  todoForm!: FormGroup;
  todos: ITodo[] = [];
  isSlidePanelOpen = false;
  todoStatus = ITodoStatus;

  
  constructor(private todoService: TodoService, private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      status: new FormControl('OPEN', [Validators.required]),
    });
  }

  ngOnInit(): void {
      this.getAllTodos(); 
  }
  
  getAllTodos() {
    this.todos = this.todoService.getAllTodo();
  }

  openSlidePanel() {
    this.isSlidePanelOpen = true;
  }

  onCloseSlidePanel() {
    this.isSlidePanelOpen = false;
  }

}
