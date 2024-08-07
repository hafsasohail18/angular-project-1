import { Component, Input, input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slide-panel',
  standalone: true,
  imports: [],
  templateUrl: './slide-panel.component.html',
  styleUrl: './slide-panel.component.css'
})
export class SlidePanelComponent {
@Input() isOpen = false; 
@Input() headerText = 'Slide Panel header'; 
@Output() onClose = new EventEmitter; 


onClosePanel() {
  this.onClose.emit(false); 
}
}
