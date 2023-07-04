import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {

    @Input() name: string;
    @Input() spin = false;
    classes = '';

    constructor() {}

    ngOnInit(): void {
        if (this.spin) {
            this.classes = 'animate-spin';
        }
    }
}
