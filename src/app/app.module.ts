import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { TasksService } from './services/tasks.service';
import { AuthService } from './services/auth.service';

import {Routes, RouterModule} from '@angular/router';
import { UserComponent } from './user/user.component'

const routes:Routes = [
 {
   path: "tasks",
   component: ToDoListComponent
  },
  {
    path: "users",
    component: UserComponent
   }
]

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TasksService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
