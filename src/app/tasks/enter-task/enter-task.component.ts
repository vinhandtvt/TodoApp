import { TaskService } from './../task.service';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Task } from 'src/app/model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-enter-task',
  templateUrl: './enter-task.component.html',
  styleUrls: ['./enter-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EnterTaskComponent implements OnInit, OnChanges {

  @Input() updateTask!: Task;
  @Output() outEnterTask = new EventEmitter<string>();
  @Output() outUpdateTask = new EventEmitter<Task>();

  inputForm!: FormGroup;
  isUpdateMode: boolean = false;

  constructor(private taskService: TaskService, private fb: FormBuilder) {}

  ngOnInit(): void {
      this.inputForm = this.fb.group({
        title: [null, Validators.required]
      })
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes);
      if (changes?.updateTask?.currentValue) {
        this.isUpdateMode = true;
        this.inputForm.patchValue({
          title: changes?.updateTask?.currentValue?.title
        })
      }

  }

  enterTask() {
    this.outEnterTask.emit(this.inputForm.value.title);
    this.inputForm.reset();
  }


  onUpdateTask() {

    const updatedTask = {
      ...this.updateTask,
      title: this.inputForm.value.title
    }
    this.outUpdateTask.emit(updatedTask);
    this.inputForm.reset();
    this.isUpdateMode = false;
  }

}
