import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../../services/auth/auth.service';

import { User } from '../../models/user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthService,
    private toastrService: ToastrService
  ) {}

  ngOnInit() {}

  register(user: User) {
    this.authService.register(user).subscribe(
      (userData: User) => {
        this.router.navigate(['/dashboard']);
      },
      errorObj => {
        if (
          errorObj &&
          errorObj.error &&
          errorObj.error.error &&
          errorObj.error.error.msg
        ) {
          this.toastrService.error(errorObj.error.error.msg, 'Error!');
        } else {
          this.toastrService.error('Something went wrong!');
        }
      }
    );
  }
}
