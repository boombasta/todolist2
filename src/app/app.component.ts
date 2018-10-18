import {Component, OnInit} from '@angular/core';
import { DataService} from './data.service';
import {Task} from './task';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent implements OnInit {
  items: Task[] = [];

  constructor(private dataService: DataService) {
  }

  addItem(title: string, createdate: number, deadlinedate: number, status: string) {

    this.dataService.addData(title, createdate, deadlinedate, status);
  }

  deleteItem(index: number) {
    this.items.splice(index: 1);
  }

  ngOnInit() {
    this.items = this.dataService.getData();
  }
}
