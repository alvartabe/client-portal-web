import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldErrorsComponent } from './field-errors/field-errors.component';
import { FormsModule } from '@angular/forms';
import { IconsModule } from './icons/icons.module';

@NgModule({
    declarations: [FieldErrorsComponent],
    imports: [
        CommonModule,
        IconsModule
    ],
    exports: [
        FormsModule,
        CommonModule,
        IconsModule,
        FieldErrorsComponent
    ],
})
export class SharedModule {}
