import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthenticationService } from "../authentication/authentication.service";
import { REQUIRES_AUTHENTICATION } from "./requires-authentication.token";

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {
    constructor(private authService: AuthenticationService) {}

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(this.authService.token)
        if (this.authService.token && request.context.get(REQUIRES_AUTHENTICATION)) {
            // add authorization header with bearer auth token if available
            request = request.clone({
                setHeaders: {
                    authorization: `Bearer ${this.authService.token}`,
                },
            });
        }
        return next.handle(request);
    }
}
