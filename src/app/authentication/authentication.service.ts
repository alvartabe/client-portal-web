import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { UserModel } from '../models/user.model';
import { LoginModel } from '../authentication/models/login.model';
import { AuthenticationClient } from '../clients/authentication.client';
import { TokenModel } from '../models/token.model';
import jwt_decode, { JwtDecodeOptions } from 'jwt-decode';

@Injectable({
    providedIn: 'root',
})
export class AuthenticationService {
    private jwtToken: string;
    decodedToken: { [key: string]: string } | undefined;

    constructor(private authClient: AuthenticationClient) {
        this.jwtToken = '';
    }

    public get token(): string {
        if (this.jwtToken) {
            return this.jwtToken;
        } else {
            return '';
        }
    }

    public set token(token: string) {
        this.jwtToken = token;
    }

    public login(login: LoginModel): Observable<TokenModel> {
        return this.authClient.login(login).pipe(
            tap((response) => {
                this.token = response.access_token;
            })
        );
    }

    public getUser(id: number): Observable<UserModel> {
        return this.authClient.getUser(id);
    }

    public isTokenExpired(): boolean {
        const expiryTime: number = this.getExpiryTime();
        if (expiryTime) {
            return 1000 * expiryTime - new Date().getTime() < 5000;
        } else {
            return false;
        }
    }

    private getDecodeToken(): any {
        return jwt_decode(this.jwtToken);
    }

    private getExpiryTime(): any {
        if (this.getDecodeToken()) {
            return this.getDecodeToken().exp;
        }
        return this.getDecodeToken() ? this.getDecodeToken().exp : null;
    }
}
