import { Component, Input } from '@angular/core';
import { AbstractControl, ControlContainer, NgForm } from '@angular/forms';
import { FieldErrorValidation } from './field-error-validation';

@Component({
    selector: 'app-field-errors',
    templateUrl: './field-errors.component.html',
    styleUrls: ['./field-errors.component.scss'],
})
export class FieldErrorsComponent {
    @Input() field: AbstractControl;
    @Input() validateUntouched: boolean;
    @Input() customValidations: FieldErrorValidation[] = [];
    @Input() customRequired: string;
    form: NgForm;

    constructor(protected controlContainer: ControlContainer) {
        this.form = this.controlContainer as NgForm;
    }
}
