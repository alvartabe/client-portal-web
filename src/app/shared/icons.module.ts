/* eslint-disable @typescript-eslint/naming-convention */
import { NgModule } from '@angular/core';
import { LucideAngularModule, Home, Menu, UserCheck, ChevronDown, Box, Loader2 } from 'lucide-angular';

@NgModule({
    imports: [
        LucideAngularModule.pick({Home, Menu, UserCheck, ChevronDown, Box, Loader2})
    ],
    exports: [],
})
export class IconsModule {}
