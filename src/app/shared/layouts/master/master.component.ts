import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { TodoComponent } from '../../../pages/todo/todo.component';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent, TodoComponent],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {

}
