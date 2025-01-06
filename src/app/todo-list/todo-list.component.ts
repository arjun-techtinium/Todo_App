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
  filteredTasks: Todo[] = [];
  searchTerm: string = '';

  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    this.filteredTasks = [...this.tasks];
  }

  filterTasks() {
    this.filteredTasks = this.tasks.filter(task =>
      task.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  getStatusText(status: number): string {
    switch (status) {
      case 0:
        return 'Created';
      case 1:
        return 'In Progress';
      case 2:
        return 'Completed';
      case 3:
        return 'Deleted';
      default:
        return '';
    }
  }

  markCompleted(id: number) {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.status = 2;
      this.saveTasks();
    }
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
    this.saveTasks();
    this.filterTasks();
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
