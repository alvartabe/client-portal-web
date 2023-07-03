import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';


@Injectable({
    providedIn: 'root',
})
export class UserService {
    private jwtToken: string;
    // eslint-disable-next-line @typescript-eslint/member-ordering
    decodedToken: { [key: string]: string } | undefined;

    constructor() {
        this.jwtToken = '';
    }

    public get token(): string {
        if (this.jwtToken) {
            return this.jwtToken;
        } else {
            return '';
        }
    }

    public set token(token: string | null) {
        this.jwtToken = token ? token : '';
    }

    public isTokenExpired(): boolean {
        const expiryTime: number = this.getExpiryTime();
        if (expiryTime) {
            return 1000 * expiryTime - new Date().getTime() < 5000;
        } else {
            return false;
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private getDecodeToken(): any {
        if (!this.jwtToken) {
            this.token = localStorage.getItem('jwtToken') ? localStorage.getItem('jwtToken') : '';
        }
        return jwt_decode(this.jwtToken);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private getExpiryTime(): any {
        if (this.getDecodeToken()) {
            return this.getDecodeToken().exp;
        }
        return this.getDecodeToken() ? this.getDecodeToken().exp : null;
    }
}
