import { Injectable } from '@angular/core';
import { Task } from '../model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [
  ]

  getTasks(): Task[] {
    return this.tasks.slice();
  }

  addTask(task: Task) {
    this.tasks.push({
      ...task,
      id: Math.random()
    });
    console.log('current task', this.tasks);

  }

  updateTask(task: Task) {
    const index = this.tasks.findIndex(t => t.id === task.id);
    this.tasks[index] = task;
    console.log('after updated', this.tasks);

  }
  doneTask(task: Task) {
    const index = this.tasks.findIndex(t => t.id === task.id);
    this.tasks[index] = task;
  }
  deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }
}
