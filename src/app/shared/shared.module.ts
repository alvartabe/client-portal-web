import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldErrorsComponent } from './field-errors/field-errors.component';
import { FormsModule } from '@angular/forms';
import { IconsModule } from './icons/icons.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [FieldErrorsComponent],
    imports: [
        CommonModule,
        RouterModule,
        IconsModule
    ],
    exports: [
        FormsModule,
        CommonModule,
        RouterModule,
        IconsModule,
        FieldErrorsComponent
    ],
})
export class SharedModule {}
