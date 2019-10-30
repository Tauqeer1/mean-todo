import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from '../../models/user';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {
  authForm: FormGroup;
  submitted = false;
  @Output() formSubmitted: EventEmitter<Partial<User>> = new EventEmitter<
    Partial<User>
  >();
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  // get form control email
  get email() {
    return this.authForm.controls.email;
  }

  // get form control password
  get password() {
    return this.authForm.controls.password;
  }

  // Form submit method
  onSubmit() {
    this.submitted = true;
    if (!this.authForm.valid) {
      return;
    }
    const { email, password } = this.authForm.value;
    this.formSubmitted.emit({ email, password });
  }
}
