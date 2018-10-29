import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import {TasksModule} from './tasks/tasks.module';
import {DataService} from './services/data.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    TasksModule,
  ],
  bootstrap: [AppComponent],
  providers: [DataService]
})
export class AppModule { }
