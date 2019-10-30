import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth/auth.service';

import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private toastrService: ToastrService,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  // Login method
  login(user: User) {
    this.authService.login(user).subscribe(
      (userData: User) => {
        // On successfull login navigate to dashboard
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
