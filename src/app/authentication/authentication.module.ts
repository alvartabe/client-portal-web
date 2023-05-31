import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginLayoutComponent } from './login-layout/login-layout.component';



@NgModule({
  declarations: [
    LoginComponent,
    LoginLayoutComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
