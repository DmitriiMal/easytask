import { Component, EventEmitter, inject, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) selectedTaskId!: string;
  @Input({ required: true }) triggerTask!: string;
  @Output() close = new EventEmitter<void>();
  private tasksService = inject(TasksService);

  editedTask = this.tasksService.tasks.filter(
    (task) => task.id === this.selectedTaskId
  );

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  constructor() {
    setTimeout(() => {
      if (this.triggerTask == 'edit') {
        const editedTask = this.tasksService.tasks.filter(
          (task) => task.id === this.selectedTaskId
        );
        this.enteredTitle = editedTask[0].title;
        this.enteredSummary = editedTask[0].summary;
        this.enteredDate = editedTask[0].dueDate;
      }
    }, 1);
  }

  onCancel() {
    return this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate,
      },
      this.userId
    );
    this.close.emit();
  }

  onEditTask() {
    this.tasksService.editTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate,
      },
      this.selectedTaskId
    );
    this.close.emit();
  }
}
