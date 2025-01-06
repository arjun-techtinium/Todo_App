import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../module/todo';

@Component({
  selector: 'app-todo-add-edit',
  templateUrl: './todo-add-edit.component.html',
  styleUrls: ['./todo-add-edit.component.css'],
  standalone:false,
})
export class TodoAddEditComponent {
  task: Todo = new Todo(0, '', '', new Date());

  constructor(private router: Router) {}

  saveTask() {
    let tasks: Todo[] = JSON.parse(localStorage.getItem('tasks') || '[]');
    this.task.id = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
    tasks.push(this.task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.router.navigate(['/']);
  }

  clearForm() {
    this.task = new Todo(0, '', '', new Date());
  }
}
