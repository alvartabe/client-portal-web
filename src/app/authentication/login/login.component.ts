import { Component, Inject, OnInit } from '@angular/core';
import { AppConfig } from 'src/app/core/app-config';
import { APP_CONFIG } from 'src/app/core/app-config.token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(@Inject(APP_CONFIG) private config: AppConfig) { }

  ngOnInit(): void {
    console.log(this.config.userApi.url)
  }

}
