import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { AppConfig } from '../core/app-config';
import { APP_CONFIG } from '../core/app-config.token';
import { UserModel } from '../models/user.model';
import { LoginModel } from '../authentication/models/login.model';

@Injectable({
    providedIn: 'root',
})
export class AuthenticationClient {
    constructor(@Inject(APP_CONFIG) private config: AppConfig, private http: HttpClient) {}

    public login(login: LoginModel): Observable<UserModel> {
        const url = `${this.config.authApi.url}/token`;
        return this.http.post<UserModel>(url, login).pipe(catchError(this.handleError));
    }

    public getUser(id: number): Observable<UserModel> {
      const url = `${this.config.authApi.url}/me/`;
      return this.http.get<UserModel>(url).pipe(catchError(this.handleError));
  }

    private handleError(error: HttpErrorResponse): Observable<never> {
        console.log(error);
        return throwError(() => error.message);
    }
}
