import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable()
export class DashboardGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthenticationService) {}

    canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.authService.isTokenExpired() ? this.router.createUrlTree(['/login']) : true;
    }
}
