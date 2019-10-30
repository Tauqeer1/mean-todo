import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

import { TodoItem } from '../../models/todo';
import { ResponseObj } from '../../models/res';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  readonly BASE_URL: string = environment.baseURL;
  constructor(private httpClient: HttpClient) {}

  getAllTodos() {
    return this.httpClient.get<ResponseObj>(`${this.BASE_URL}/api/todo`).pipe(
      map(res => {
        if (res.success) {
          return res.data;
        }
      })
    );
  }

  addTodo(todo: TodoItem) {
    return this.httpClient
      .post<ResponseObj>(`${this.BASE_URL}/api/todo`, todo)
      .pipe(
        map(res => {
          if (res.success) {
            return res.data;
          }
        })
      );
  }

  // tslint:disable-next-line: variable-name
  deleteTodo(_id: string) {
    return this.httpClient
      .delete<ResponseObj>(`${this.BASE_URL}/api/todo/${_id}`)
      .pipe(
        map(res => {
          if (res.success) {
            return _id;
          }
        })
      );
  }

  updateTodo(todo: TodoItem) {
    return this.httpClient
      .put<ResponseObj>(`${this.BASE_URL}/api/todo/${todo._id}`, todo)
      .pipe(
        map(res => {
          if (res.success) {
            return res.data;
          }
        })
      );
  }
}
