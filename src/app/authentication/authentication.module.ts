import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from './authentication.service';
import { AuthenticationClientModule } from '../clients/authentication.client.module';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
    declarations: [
      LoginComponent,
      AuthenticationComponent,
      RegisterComponent
    ],
    imports: [
      CommonModule,
      AuthenticationRoutingModule,
      FormsModule,
      AuthenticationClientModule,
      HttpClientModule,
      SharedModule
    ],
    providers: [
      AuthenticationService
    ]
})
export class AuthenticationModule {}
