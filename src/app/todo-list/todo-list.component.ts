import { Component } from '@angular/core';
import { Todo } from '../module/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  standalone:false,
})
export class TodoListComponent {
  tasks: Todo[] = [];
  searchTerm: string = '';

  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
  }

  filteredTasks(): Todo[] {
    return this.tasks.filter(task => task.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }

editTask(id: number) {
  const task = this.tasks.find(task => task.id === id);
  if (task){
    task.status = 2;
    this.saveTasks();
  }
}

deleteTask(id: number) {
  const task = this.tasks.find(task => task.id === id);
  if (task){
    task.status = 3;
    this.saveTasks();
  }
}

saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(this.tasks));
}
}
