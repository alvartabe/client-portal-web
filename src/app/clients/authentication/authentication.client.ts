import { HttpClient, HttpContext, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { AppConfig } from '../../core/app-config';
import { APP_CONFIG } from '../../core/app-config.token';
import { UserModel } from '../../models/user.model';
import { TokenModel } from '../../models/token.model';
import { REQUIRES_AUTHENTICATION } from '../../core/requires-authentication.token';
import { RegisterModel } from '@app/models/register.model';
import { LoginModel } from '@app/models/login.model';

@Injectable({
    providedIn: 'root',
})
export class AuthenticationClient {
    private context = new HttpContext().set(REQUIRES_AUTHENTICATION, true);
    private httpOptions = { context: this.context };

    constructor(@Inject(APP_CONFIG) private config: AppConfig, private http: HttpClient) {}

    public login(login: LoginModel): Observable<TokenModel> {
        const url = `${this.config.api.url}/login`;
        return this.http.post<TokenModel>(url, login).pipe(catchError(this.handleError));
    }

    public getUser(id: number): Observable<UserModel> {
        const url = `http://localhost:8080/order`;
        return this.http.get<UserModel>(url, this.httpOptions).pipe(catchError(this.handleError));
    }

    public register(user: RegisterModel): Observable<UserModel> {
        const url = `${this.config.api.url}/register`;
        return this.http.post<UserModel>(url, user, this.httpOptions).pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse): Observable<never> {
        return throwError(() => error);
    }
}
