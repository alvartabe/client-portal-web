import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/authentication.service';
import { LoginModel } from '@app/models/login.model';
import { SharedModule } from '@app/shared/shared.module';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [SharedModule]
})
export class LoginComponent {
    @ViewChild('loginForm', { static: true }) loginForm: NgForm;

    model: LoginModel = {username: 'alvartabe', password: 'virusnet'};
    showGeneralErrorMessage = false;
    showCredentialsError = false;
    isLoading = false;

    constructor(private authenticationService: AuthenticationService, private router: Router) {}

    onSubmit(): void {

        if (this.isLoading) {
            return;
        }

        if (this.loginForm.valid) {
            this.cleanErrors();
            this.isLoading = true;

            this.authenticationService.login(this.model).subscribe({
                next: () => {
                    this.router.navigate(['/dashboard']);
                },
                error: (error: HttpErrorResponse) => {
                    this.setErrors(error);
                    this.isLoading = false;
                },
            });
        }
    }

    private setErrors(error: HttpErrorResponse): void {
        if (error.status === HttpStatusCode.Unauthorized) {
            this.showCredentialsError = true;
        } else {
            this.showGeneralErrorMessage = true;
        }
    }

    private cleanErrors(): void {
        this.showGeneralErrorMessage = false;
        this.showCredentialsError = false;
    }
}
