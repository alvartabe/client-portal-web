import { Injectable } from '@angular/core';
import { UserClient } from '@app/clients/user/user.client';
import { TableParamsModel } from '@app/models/table-params.model';
import { UserModel } from '@app/models/user.model';
import { Observable } from 'rxjs';


@Injectable()
export class UserService {

    constructor(private userClient: UserClient) {}

    public getUsers(): Observable<UserModel[]> {
        return this.userClient.getUsers();
    }
}
