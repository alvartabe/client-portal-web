import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { REQUIRES_AUTHENTICATION } from './requires-authentication.token';
import { UserService } from '@app/dashboard/user.service';

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {

    constructor(private userService: UserService) {}

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.userService.token && request.context.get(REQUIRES_AUTHENTICATION)) {
            // add authorization header with bearer auth token if available
            request = request.clone({
                setHeaders: {
                    authorization: `Bearer ${this.userService.token}`,
                },
            });
        }
        return next.handle(request);
    }
}
