import { Routes } from '@angular/router';

import { AccountComponent } from './account/account.component';
import { TodoComponent } from './todo/todo.component';

export const routes: Routes = [
  { path: 'account', component: AccountComponent },
  { path: 'todo', component: TodoComponent }
];
