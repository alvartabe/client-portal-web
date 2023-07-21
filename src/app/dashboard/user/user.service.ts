import { Injectable } from '@angular/core';
import { UserClient } from '@app/clients/user/user.client';
import { UserModel } from '@app/models/user.model';
import { Observable } from 'rxjs';


@Injectable()
export class UserService {

    constructor(private userClient: UserClient) {}

    public getAllUsers(): Observable<UserModel[]> {
        return this.userClient.getAllUsers();
    }
}
