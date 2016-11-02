import { Component } from '@angular/core';
import { Work } from './Work';
import { WORKS } from './data-works';
@Component({
    selector: 'works',
    templateUrl: './app/home/works.component.html'
})
export class WorksComponent { 
    works: Work[];

    ngOnInit() {
        this.works = WORKS;
    }
}