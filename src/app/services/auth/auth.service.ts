import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

import { User } from '../../models/user';
import { ResponseObj } from '../../models/res';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly BASE_URL: string = environment.baseURL;
  private userSubject: BehaviorSubject<User>;

  constructor(private httpClient: HttpClient, private router: Router) {
    this.userSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('user'))
    );
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  register(user: User) {
    return this.httpClient
      .post<ResponseObj>(`${this.BASE_URL}/api/signup`, user)
      .pipe(
        map(res => {
          if (res.success) {
            localStorage.setItem('user', JSON.stringify(res.data));
            this.userSubject.next(res.data);
            return res.data;
          }
        })
      );
  }

  login(user: User) {
    return this.httpClient
      .post<ResponseObj>(`${this.BASE_URL}/api/login`, user)
      .pipe(
        map(res => {
          if (res.success) {
            localStorage.setItem('user', JSON.stringify(res.data));
            this.userSubject.next(res.data);
            return res.data;
          }
        })
      );
  }

  logout() {
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }
}
