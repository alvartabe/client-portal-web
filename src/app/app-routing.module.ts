import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationService } from './authentication.service';

const routes: Routes = [
    {
        path: 'login',
        providers: [AuthenticationService],
        loadComponent: () => import('./login/login.component').then((m) => m.LoginComponent),
    },
    {
        path: 'register',
        providers: [AuthenticationService],
        loadComponent: () => import('./register/register.component').then((m) => m.RegisterComponent),
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
