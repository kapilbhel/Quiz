import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { RegisterForm } from '../shared/register-form.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerFormData: RegisterForm;
  errors: QuizApi.Error[] = [];
  emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  constructor(
    private auth: AuthService, 
    private router: Router) { }

  ngOnInit() {
    this.registerFormData = new RegisterForm();
  }
  register(form: NgForm) {
    this.validateInputs(form);

    if (form.invalid) { return; }
    this.errors = [];
    this.auth
    .register(this.registerFormData)
    .subscribe(_ => {
      this.router.navigate(['/login'], {
        queryParams: { message: 'You have been succesfuly registered!'}
      });
    }, (errors: QuizApi.Error[]) => this.errors = errors);

  }
  validateInputs(form: NgForm) {
    Object.keys(form.controls).forEach(controlName => {
      form.controls[controlName].markAsDirty();
    })
  }

}
