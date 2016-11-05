import { Component } from '@angular/core';
import { Study } from './study';
import { STUDIES } from './data-studies';
@Component({
    selector: 'education',
    templateUrl: './app/home/education.component.html'
})
export class EducationComponent { 
    //TODO: implement a way to sort by year.
    studies: Study[];

    ngOnInit(){
        this.studies = STUDIES;
    }
}