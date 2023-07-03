import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { UserModel } from './models/user.model';
import { AuthenticationClient } from './clients/authentication/authentication.client';
import { TokenModel } from './models/token.model';
import jwt_decode from 'jwt-decode';
import { RegisterModel } from './models/register.model';
import { LoginModel } from '@app/models/login.model';

@Injectable()
export class AuthenticationService {

    constructor(private authClient: AuthenticationClient) {}

    public login(login: LoginModel): Observable<TokenModel> {
        return this.authClient.login(login).pipe(
            tap((response) => {
                localStorage.setItem('jwtToken', response.access_token);
            })
        );
    }

    public register(user: RegisterModel): Observable<UserModel> {
        return this.authClient.register(user);
    }
}
