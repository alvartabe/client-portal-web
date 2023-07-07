import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthenticationService } from '../authentication.service';
import { UserService } from './user.service';

@Injectable()
export class DashboardGuard implements CanActivate {
    constructor(private router: Router, private userService: UserService) {}

    canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
       return this.userService.isTokenExpired() ? this.router.createUrlTree(['/login']) : true;
       //return true;
    }
}
