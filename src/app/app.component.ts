import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone:false
})
export class AppComponent {
filterTasks() {
throw new Error('Method not implemented.');
}
  title = 'todo-project';
  searchTerm: string = '';
}
