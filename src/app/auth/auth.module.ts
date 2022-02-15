import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {path: '',  redirectTo:'register',pathMatch:'full'},
    {path:'register',component:RegisterComponent},
    {path: 'login', component: LoginComponent}
  
]

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }