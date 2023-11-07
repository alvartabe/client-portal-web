import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropboxClient } from './dropbox.client';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    providers: [DropboxClient],
})
export class DropboxClientModule {}
