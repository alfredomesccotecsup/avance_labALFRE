import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: Task[] = [];
  selectedFilter: string = 'all';

  addTask(task: string) {
    this.tasks.push({ name: task, completed: false });
    this.applyFilter(this.selectedFilter);
  }

  applyFilter(filter: string) {
    this.selectedFilter = filter;
  }
}

interface Task {
  name: string;
  completed: boolean;
}
