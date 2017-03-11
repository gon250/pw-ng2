import { Component } from '@angular/core';
import { Portfolio } from './portfolio';
import { MONEYMATE } from './data-portfolio';
@Component({
    selector: 'moneymate',
    templateUrl: './app/portfolio/moneymate.component.html',
    styles: ['.proyect-card { margin-bottom: 22px; }']
})
export class MoneymateComponent {
    proyects: Portfolio[];

    ngOnInit() {
        this.proyects = MONEYMATE;
    }
}
