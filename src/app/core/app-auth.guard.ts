import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';
import { TokenValidationService } from '@app/core/app-token-validation.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private tokenValidationService: TokenValidationService) {}

    canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
       return this.tokenValidationService.isTokenExpired() ? this.router.createUrlTree(['/login']) : true;
    }
}
