import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';

import {MatDialogModule} from '@angular/material/dialog';


import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule} from '@angular/material';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavComponent } from './globals/nav/nav.component';

import { CreateProjectComponent } from './pages/projects/create-project/create-project.component';
import { EditProjectComponent } from './pages/projects/edit-project/edit-project.component';
import { ListProjectComponent } from './pages/projects/list-project/list-project.component';
import { IdProjectComponent } from './pages/projects/id-project/id-project.component';
import { DigitOnlyModule } from '@uiowa/digit-only';

import { CreateTaskComponent } from './pages/tasks/create-task/create-task.component';
import { EditTaskComponent } from './pages/tasks/edit-task/edit-task.component';
import { ListTaskComponent } from './pages/tasks/list-task/list-task.component';

import { CreateUserComponent } from './pages/users/create-user/create-user.component';
import { EditUserComponent } from './pages/users/edit-user/edit-user.component';
import { ListUserComponent } from './pages/users/list-user/list-user.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DateDisplayPipe } from './pipes/date-display.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component'
import { DeleteUserComponent } from './pages/users/delete-user/delete-user.component';

import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { KanbanComponent } from './globals/kanban/kanban.component'

import { DragDropModule } from '@angular/cdk/drag-drop';
import { FooterComponent } from './globals/footer/footer.component';
import { TokenInterceptor } from './services/token.service';
import { DialogPopupComponent } from './globals/dialog-popup/dialog-popup.component';



@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    EditUserComponent,
    CreateProjectComponent,
    EditProjectComponent,
    CreateTaskComponent,
    EditTaskComponent,
    NavComponent,

    ListProjectComponent,
    ListTaskComponent,
    ListUserComponent,
    DateDisplayPipe,
    HomeComponent,
    DeleteUserComponent,
    IdProjectComponent,
    NotFoundComponent,
    LoginComponent,
    KanbanComponent,
    FooterComponent,
    DialogPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatRadioModule,
    MatFormFieldModule,
    MatListModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    DragDropModule,
    DigitOnlyModule,
    MatDialogModule
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogPopupComponent
  ]
})
export class AppModule { }
