import { HttpClient, HttpContext, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { AppConfig } from '../../core/app-config';
import { APP_CONFIG } from '../../core/app-config.token';
import { REQUIRES_AUTHENTICATION } from '../../core/requires-authentication.token';
import { UserModel } from '@app/models/user.model';

@Injectable({
    providedIn: 'root',
})

export class UserClient {
    private context = new HttpContext().set(REQUIRES_AUTHENTICATION, true);
    private httpOptions = { context: this.context };

    constructor(@Inject(APP_CONFIG) private config: AppConfig, private http: HttpClient) {}

    public getAllUsers(): Observable<UserModel[]> {
        const url = `${this.config.api.url}/user`;
        return this.http.get<UserModel[]>(url, this.httpOptions).pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse): Observable<never> {
        return throwError(() => error);
    }
}
