import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserModel } from "../models/user.model";
import { LoginModel } from "../authentication/models/login.model";
import { AuthenticationClient } from "../clients/authentication.client";

@Injectable({
  providedIn: 'root',
})

export class AuthenticationService {
  constructor(private authClient: AuthenticationClient) {}

  public login(login: LoginModel): Observable<UserModel> {
      return this.authClient.login(login);
  }

  public getUser(id: number): Observable<UserModel> {
    return this.authClient.getUser(id);
}
}
