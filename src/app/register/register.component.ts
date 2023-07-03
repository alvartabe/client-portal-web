import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FieldErrorValidation } from '@app/shared/field-errors/field-error-validation';
import { ErrorModel } from '@app/models/error.model';
import { SharedModule } from '@app/shared/shared.module';
import { AuthenticationService } from '@app/authentication.service';
import { RegisterModel } from '@app/models/register.model';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    standalone: true,
    imports: [SharedModule]
})
export class RegisterComponent implements OnInit {
    @ViewChild('registerForm', { static: true }) registerForm: NgForm;

    model: RegisterModel = { username: 'alvartabe', password: '@Varo1994', firstName: 'aaa', lastName: 'aaa', passwordConfirmation: '@Varo1994', email: 'alvartabe30@gmail.com' };
    passwordValidator: FieldErrorValidation[];
    passwordConfirmationValidator: FieldErrorValidation[];
    isLoading = false;

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

    ngOnInit(): void {}

    onSubmit(): void {
        if (this.model.password !== this.model.passwordConfirmation) {
            this.registerForm.form.controls.passwordConfirmation.setErrors({ notEqual: true });
        }

        if(this.registerForm.valid) {
            this.cleanErrors();
            this.isLoading = true;

            this.authenticationService.register(this.model).subscribe({
                next: (response) => {
                    console.log(response);
                },
                error: (error) => {
                    this.isLoading = false;
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
        this.registerForm.form.controls.username.setErrors(null);
        this.registerForm.form.controls.email.setErrors(null);
    }
}
