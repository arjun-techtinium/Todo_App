import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoAddEditComponent } from './todo-add-edit/todo-add-edit.component';

const routes: Routes = [
  {path: '', component: TodoListComponent},
  {path: 'edit', component: TodoAddEditComponent},
  {path: 'add', component: TodoAddEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
