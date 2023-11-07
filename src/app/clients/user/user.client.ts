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
    private dropboxApiUrl = 'https://api.dropboxapi.com/2/files';
    private accessToken = 'sl.BpZmS8MniuFXPunUd2Kle5bT32NazB1rNiexbygz-jE9Q3QFSiCmqeByCYP24CkRKGXY-9AF05mrorM_B4TEIoc0s9Iv_HJMe0stLdPkgSpu-0m5nokDJ3mPgZsrRQCV-ghf5VhkPeRT';

    constructor(@Inject(APP_CONFIG) private config: AppConfig, private http: HttpClient) {}

    public getUsers(): Observable<UserModel[]> {
        const url = `${this.config.api.url}/user`;
        return this.http.get<UserModel[]>(url, this.httpOptions).pipe(catchError(this.handleError));
    }

    public getFolderContents(folderPath: string): Observable<any> {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${this.accessToken}`);
        const httpOptions = { headers };
        const url = `${this.dropboxApiUrl}/list_folder`;

        return this.http.post(url, {path: folderPath}, httpOptions);
    }

    private handleError(error: HttpErrorResponse): Observable<never> {
        return throwError(() => error);
    }
}
