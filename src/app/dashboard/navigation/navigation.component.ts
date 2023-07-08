import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements AfterViewInit {
    constructor(private http: HttpClient) {}

    ngAfterViewInit(): void {
        this.loadScript('assets/menu.js');
    }

    private loadScript(scriptUrl: string): void {
        this.http.get(scriptUrl, { responseType: 'text' }).subscribe((script) => {
            const customScript = document.createElement('script');
            customScript.innerHTML = script;
            document.body.appendChild(customScript);
        });
    }
}
