import {Task} from './task';
import {s} from '@angular/core/src/render3';


export class DataService{

  private data: Task[] = [
    { title: 'sdsad', createdate: 2, deadlinedate: 4, status: 'done'},
    { title: 'asku', createdate: 2, deadlinedate: 4, status: 'do'}
  ];
  getData(): Task[] {

    return this.data;
  }
  addData(title: string, createdate: number, deadline: number, status: string) {

    this.data.push(new Task(title, createdate, deadline, status));
  }

}
