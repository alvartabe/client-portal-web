import { AbstractControl, NgForm } from '@angular/forms';

export interface FieldErrorValidation {
    validation: (field: AbstractControl, validateUntouched: boolean, form: NgForm) => boolean;
    validateUntouched?: boolean;
    message: string;
    name?: string;
    mappedName?: string;
}
