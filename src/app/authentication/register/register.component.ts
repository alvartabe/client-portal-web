import { Component, OnInit, ViewChild } from '@angular/core';
import { RegisterModel } from '../models/register.model';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FieldErrorValidation } from '@app/shared/field-errors/field-error-validation';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
    @ViewChild('registerForm', { static: true }) registerForm: NgForm;

    model: RegisterModel = { username: '', password: '', firstName: '', lastName: '', passwordConfirmation: '', email: '' };
    passwordValidator: FieldErrorValidation[];
    passwordConfirmationValidator: FieldErrorValidation[];

    readonly usernameMinLength = 8;
    readonly passwordMaxLength = 30;

    constructor(private authenticationService: AuthenticationService, private router: Router) {
        this.passwordValidator = [
            {
                // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
                validation: (field, validateUntouched, form) => field?.errors?.pattern && (validateUntouched || field?.dirty || form?.submitted),
                message: 'Password must contain minimum 8 characters, one uppcase and lowercase letter, one number and one special character.',
            }
        ];
        this.passwordConfirmationValidator = [
            {
                // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
                validation: (field, validateUntouched, form) => form.controls.password.value !== this.registerForm.form.controls.passwordConfirmation.value && (validateUntouched || field?.dirty || form?.submitted),
                message: 'Password confirmation must match.',
            }
        ];
    }

    ngOnInit(): void {
    }

    onSubmit(): void {
        // this.authenticationService.login(this.model).subscribe((response) => {
        //     this.router.navigate(['/dashboard']);
        // });
        // this.registerForm.form.controls.username.setErrors({ username: true });
        // this.registerForm.form.controls.email.setErrors({ email: true });

        // console.log('register');
    }
}
