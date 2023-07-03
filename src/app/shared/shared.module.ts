import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldErrorsComponent } from './field-errors/field-errors.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [FieldErrorsComponent],
    imports: [CommonModule],
    exports: [
        FormsModule,
        CommonModule,
        FieldErrorsComponent
    ],
})
export class SharedModule {}
