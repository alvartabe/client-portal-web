/* eslint-disable @typescript-eslint/naming-convention */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon.component';
import { LucideAngularModule, Home, Menu, UserCheck, Loader2, CheckCircle, AlertOctagon } from 'lucide-angular';

@NgModule({
    declarations: [IconComponent],
    imports: [
        CommonModule,
        LucideAngularModule.pick({Home, Menu, UserCheck, Loader2, CheckCircle, AlertOctagon})
    ],
    exports:[IconComponent]
})
export class IconsModule {}
