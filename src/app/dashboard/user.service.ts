import { Injectable } from '@angular/core';
import { JWT_TOKEN } from '@app/constants/constants';
import jwt_decode from 'jwt-decode';


@Injectable({
    providedIn: 'root',
})
export class UserService {
    private jwtToken: string;

    public get token(): string {
        return this.jwtToken ? this.jwtToken : '';
    }

    public set token(token: string | null) {
        this.jwtToken = token ? token : '';
    }

    public isTokenExpired(): boolean {
        if (this.isExpired()) {
            localStorage.setItem(JWT_TOKEN, '');
            return true;
        } else {
            return false;
        }
    }

    private isExpired(): boolean {
        const expiryTime: number = this.getExpiryTime();
        return expiryTime ? 1000 * expiryTime - new Date().getTime() < 5000 : false;
    }

    private getExpiryTime(): number {
        return this.getDecodeToken() ? this.getDecodeToken().exp : null;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private getDecodeToken(): any {
        this.token = localStorage.getItem(JWT_TOKEN) ? localStorage.getItem(JWT_TOKEN) : '';
        return jwt_decode(this.token);
    }
}
