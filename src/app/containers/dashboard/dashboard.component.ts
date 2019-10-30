import { Component, OnInit } from '@angular/core';

import { TodoItem } from '../../models/todo';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  addTodo(todoObj: TodoItem) {
    console.log('todoObj', todoObj);
  }
}
