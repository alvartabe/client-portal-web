import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { AppConfig } from '../../core/app-config';
import { APP_CONFIG } from '../../core/app-config.token';
import { DropboxModel } from '@app/models/dropbox.model';
import { DropboxResponseModel } from '@app/models/dropbox-response.model';


@Injectable({
    providedIn: 'root',
})
export class DropboxClient {
    private dropboxApiUrl = 'https://api.dropboxapi.com/2/files';
    private accessToken = '';

    constructor(@Inject(APP_CONFIG) private config: AppConfig, private http: HttpClient) {}

    public getFolderContents(folderPath: string): Observable<DropboxResponseModel> {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${this.accessToken}`);
        const httpOptions = { headers };
        const url = `${this.dropboxApiUrl}/list_folder`;

        return this.http.post<DropboxResponseModel>(url, {path: folderPath}, httpOptions);
    }

    private handleError(error: HttpErrorResponse): Observable<never> {
        return throwError(() => error);
    }
}
