import { Component } from '@angular/core';
import { Portfolio } from './portfolio';
import { CLUBTRAVEL } from './data-portfolio';
@Component({
    selector: 'clubtravel',
    templateUrl: './app/portfolio/clubtravel.component.html',
    styles: ['.proyect-card { margin-bottom: 22px; }']
})
export class ClubtravelComponent {
    proyects: Portfolio[];

    ngOnInit() {
        this.proyects = CLUBTRAVEL;
    }
}
