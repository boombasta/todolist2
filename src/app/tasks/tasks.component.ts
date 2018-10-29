import { Component, OnInit } from '@angular/core';
import {Task} from './task';
import {DataService} from '../services/data.service';

export interface Level {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [DataService],
})
export class TasksComponent implements OnInit {
  items: Task[] = [];
  constructor(private dataService: DataService) {
  }
  levels: Level[] = [
    {value: 'done-0', viewValue: 'Done'},
    {value: 'postponed-1', viewValue: 'Postponed'},
    {value: 'notdone-2', viewValue: 'Not done'}
  ];
  addItem(title: string, createdate: string, deadlinedate: string, status: string) {
    this.dataService.addData(title, createdate, deadlinedate, status);
  }
  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
  ngOnInit() {
    this.items = this.dataService.getData();
  }
  Sort() {
    this.items.sort((a, b) =>
    {
      if (a.deadlinedate > b.deadlinedate) {
        return 1;
      }
      if (a.deadlinedate < b.deadlinedate) {
        return -1;
      }
      return 0;
    });
  }
}
