import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];
  selectedTask!: Task;

  constructor(private taskService: TaskService) {
    // get task from service on create
    this.tasks = taskService.getTasks();
   }

  ngOnInit(): void {
  }


  addTask(title: string) {
    const task: Task = {
      title, done: false
    }
    this.taskService.addTask(task);
    this.tasks = this.taskService.getTasks();

  }

  chooseUpdateTask(task: Task) {
    this.selectedTask = task;
  }

  updateTask(task: Task) {
    this.taskService.updateTask(task);
    this.tasks = this.taskService.getTasks();
  }
  doneTask(task: Task) {
    this.taskService.doneTask(task);
    this.tasks = this.taskService.getTasks();
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
    this.tasks = this.taskService.getTasks();
  }

}
