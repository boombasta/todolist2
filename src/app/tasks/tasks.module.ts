import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TasksComponent} from './tasks.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule, MatSelectModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {DataService} from '../services/data.service';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatSelectModule,
  ],
  declarations: [TasksComponent],
  exports: [TasksComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TasksModule { }
