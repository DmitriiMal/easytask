import { Injectable } from '@angular/core';
import { type NewTaskData } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn ll the basics and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('EasyTask');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }

    // this.editTask(
    //   {
    //     title: 'Test2',
    //     summary: 'Test2',
    //     date: '2024-10-15',
    //   },
    //   't1'
    // );
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(TaskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: TaskData.title,
      summary: TaskData.summary,
      dueDate: TaskData.date,
    });
    this.saveTasks();
  }

  editTask(TaskData: NewTaskData, taskId: string) {
    const task = this.tasks.filter((task) => task.id === taskId);
    task[0].title = TaskData.title;
    task[0].summary = TaskData.summary;
    task[0].dueDate = TaskData.date;
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('EasyTask', JSON.stringify(this.tasks));
  }
}
