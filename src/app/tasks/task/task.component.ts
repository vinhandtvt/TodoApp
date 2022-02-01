import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Task } from 'src/app/model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TaskComponent implements OnInit {

  @Input() task!: Task;
  @Output() outUpdateTask = new EventEmitter<Task>();
  @Output() outDeleteTask = new EventEmitter<number>();
  @Output() outDoneTask = new EventEmitter<Task>();

  constructor() { }

  ngOnInit(): void {
  }

  updateTask() {
    this.outUpdateTask.emit({
      ...this.task
    })
  }
  deleteTask() {
    this.outDeleteTask.emit(this.task.id)
  }
  doneTask() {
    this.outDoneTask.emit({
      ...this.task,
      done: true
    })
  }
}
