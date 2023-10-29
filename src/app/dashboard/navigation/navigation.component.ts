import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
    activeSubMenu: string | null = null;
    activeMenu: string | null = null;
    readonly user = 'user';
    readonly dashboard = 'dashboard';
    readonly account = 'account';

    constructor(private route: Router) {}

    ngOnInit(): void {
        this.activeMenu = this.getActiveMenu();
        this.toggleSubMenu(this.getActiveMenu());

        this.route.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.setMenu();
            }
        });
    }

    toggleSubMenu(subMenu: string): void {
        if (this.activeSubMenu === subMenu) {
            this.activeSubMenu = null;
        } else {
            this.activeSubMenu = subMenu;
        }
    }

    private setMenu(): void {
        this.activeMenu = this.getActiveMenu();
    }

    private getActiveMenu(): string {
        if (this.route.url.includes(this.user)) {
            return this.user;
        } else if (this.route.url.includes(this.dashboard)) {
            return this.dashboard;
        }
        return '';
    }
}
