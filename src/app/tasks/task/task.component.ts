import { Component, EventEmitter, Input, Output } from '@angular/core';

import { type Task } from './task.model';
import { CardComponent } from '../../shaerd/card/card.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    return this.complete.emit(this.task.id);
  }
}
