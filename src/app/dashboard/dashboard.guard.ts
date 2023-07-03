import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthenticationService } from '../authentication.service';

@Injectable()
export class DashboardGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
       // return this.authService.isTokenExpired() ? this.router.createUrlTree(['/login']) : true;
       return true;
    }
}
