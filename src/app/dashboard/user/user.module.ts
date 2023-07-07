import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { SharedModule } from '@app/shared/shared.module';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
    declarations: [
        UserListComponent
    ],
    imports: [
        SharedModule,
        UserRoutingModule
    ],
})
export class UserModule {}
