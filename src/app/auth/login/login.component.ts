import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  message: string;
  messageTimeout: number;

  loginForm: FormGroup;
  emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  errors: QuizApi.Error[] = [];
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService) { }

  ngOnInit() {
    this.initForm();
    this.checkLoginMessage(); 
  }
  login() {
    if (this.loginForm.invalid) { return; }

    this.errors = [];
    return this.auth
      .login(this.loginForm.value)
      .subscribe((token: string) => {
        this.router.navigate(['/quiz']);
        console.log(token);
      }, (errors: QuizApi.Error[]) => {
        this.errors = errors;
      }) 

  }
  checkLoginMessage() {
    this.route.queryParams.subscribe(params => {
      this.message = params['message'] ? params['message'] : null;
      this.messageTimeout = window.setTimeout(() => {
        this.router.navigate([], {
          replaceUrl: true,
          queryParams: {message: null},
          queryParamsHandling: 'merge'
        })

        this.message = '';
      }, 2000);
    })
  }

  ngOnDestroy() {
    this.messageTimeout && window.clearTimeout(this.messageTimeout);
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get email(): AbstractControl { return this.loginForm.get('email')}
  get password(): AbstractControl { return this.loginForm.get('password')}
  get diagnostic(): string {
    return JSON.stringify(this.loginForm.value);
  }

}