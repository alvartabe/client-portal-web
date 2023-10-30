import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FieldErrorValidation } from '@app/shared/field-errors/field-error-validation';
import { ErrorModel } from '@app/models/error.model';
import { SharedModule } from '@app/shared/shared.module';
import { AuthenticationService } from '@app/core/app-authentication.service';
import { RegisterModel } from '@app/models/register.model';
import { Observable, interval, map, takeWhile, tap } from 'rxjs';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    standalone: true,
    imports: [SharedModule]
})
export class RegisterComponent {
    @ViewChild('registerForm', { static: true }) registerForm: NgForm;

    model: RegisterModel = { username: 'alvartabe', password: '@Varo1994', firstName: 'aaa', lastName: 'aaa', passwordConfirmation: '@Varo1994', email: 'alvartabe30@gmail.com' };
    // model: RegisterModel = { username: '', password: '', firstName: '', lastName: '', passwordConfirmation: '', email: '' };
    passwordValidator: FieldErrorValidation[];
    passwordConfirmationValidator: FieldErrorValidation[];
    remainingSeconds: Observable<number>;
    isLoading = false;
    isSuccessful = false;
    showGeneralErrorMessage = false;

    readonly usernameMinLength = 8;
    readonly passwordMaxLength = 30;

    constructor(private authenticationService: AuthenticationService, private router: Router) {
        this.passwordValidator = [
            {
                // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
                validation: (field, validateUntouched, form) => field?.errors?.pattern && (validateUntouched || field?.dirty || form?.submitted),
                message: 'Password must contain minimum 8 characters, one uppcase and lowercase letter, one number and one special character.',
            },
        ];
        this.passwordConfirmationValidator = [
            {
                // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
                validation: (field, validateUntouched, form) => form.controls.password?.value !== this.registerForm.form.controls.passwordConfirmation?.value && (validateUntouched || field?.dirty || form?.submitted),
                message: 'Password confirmation must match.',
            },
        ];
    }

    onSubmit(): void {
        if (this.model.password !== this.model.passwordConfirmation) {
            this.registerForm.form.controls.passwordConfirmation.setErrors({ notEqual: true });
            return;
        }

        if (this.isLoading || this.isSuccessful) {
           return;
        }

        if(this.registerForm.valid) {
            this.cleanErrors();
            this.isLoading = true;

            this.authenticationService.register(this.model).subscribe({
                next: () => {
                    this.isSuccessful = true;
                    this.isLoading = false;
                    this.redirectToLoginPage();
                },
                error: (error) => {
                    this.isLoading = false;
                    this.showGeneralErrorMessage = true;
                    if(error?.error?.errors) {
                        this.setErrors(error?.error?.errors);
                    }
                },
            });
        }
    }

    private setErrors(errors: ErrorModel[]): void {
        this.registerForm.form.controls.username.setErrors(errors.find(item => item.field === 'username') ? {notUnique:true} : null);
        this.registerForm.form.controls.email.setErrors(errors.find(item => item.field === 'email') ? {notUnique:true} : null);
    }

    private cleanErrors(): void {
        this.showGeneralErrorMessage = false;
        this.registerForm.form.controls.username.setErrors(null);
        this.registerForm.form.controls.email.setErrors(null);
    }

    private redirectToLoginPage(): void {
        this.remainingSeconds = interval(1000).pipe(
            map((seconds: number) => 5 - seconds),
            takeWhile(seconds => seconds >= 0),
            tap((seconds: number) => {
                if (seconds === 0) {
                    this.router.navigateByUrl('login');
                }
            })
        );
    }
}
