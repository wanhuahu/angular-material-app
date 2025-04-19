import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

import { AngularMaterialModule } from '../../shared/material.module';
import { Task } from './todo.component.model';

@Component({
  selector: 'app-todo',
  imports: [
    AngularMaterialModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  remaining = 0;
  total = 0;

  constructor() { }

  ngOnInit(): void {
  }

  title = 'applyboard-demo';

  inputValue = '';
  displayedColumns: string[] = ['no', 'name', 'deletion', 'complete'];
  dataSource!: MatTableDataSource<Task>;
  oriNumber = 0;
  tasks: Task[] = [];

  add() {
    const tasks: Task = {
      no: this.oriNumber++,
      name: this.inputValue,
      completed: false,
    } as Task;
    this.inputValue = '';
    this.tasks.push(tasks);

    this.remaining = this.tasks.filter(i => !i.completed).length;
    this.total = this.tasks.length;

    this.dataSource = new MatTableDataSource(this.tasks);
  }

  delete(no: number) {
    const index = this.tasks.findIndex(person => person.no === no);
    this.tasks.splice(index, 1);
    this.remaining = this.tasks.filter(i => !i.completed).length;
    this.total = this.tasks.length;
    this.dataSource = new MatTableDataSource(this.tasks);
  }

  underline(no: number) {
    const item = this.tasks.find(person => person.no === no);
    item!.completed = !item!.completed;
    this.remaining = this.tasks.filter(i => !i.completed).length;
    this.dataSource = new MatTableDataSource(this.tasks);
  }
}
