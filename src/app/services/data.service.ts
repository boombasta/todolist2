import {Task} from '../tasks/task';
export class DataService {

  tasks: Task[] = [
    {title: 'Kill evryone', createdate: '2', deadlinedate: '2', status: 'done'}
  ];

  getData(): Task[] {
    return this.tasks;
  }

  addData(title, createdate, deadlinedate, status){
    this.tasks.push(new Task(title, createdate, deadlinedate, status));
  }
}
