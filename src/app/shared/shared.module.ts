import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldErrorsComponent } from './field-errors/field-errors.component';
import { FormsModule } from '@angular/forms';
import { IconsModule } from './icons/icons.module';
import { RouterModule } from '@angular/router';
import { YesNoPipe } from '@app/pipes/yes-no.pipe';

@NgModule({
    declarations: [
        FieldErrorsComponent,
        YesNoPipe,
    ],
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
        FieldErrorsComponent,
        YesNoPipe
    ],
})
export class SharedModule {}
