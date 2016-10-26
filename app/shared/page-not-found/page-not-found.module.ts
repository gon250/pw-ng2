import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PageNotFoundComponent } from './index';


@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [PageNotFoundComponent],
    exports: [PageNotFoundComponent]
})


export class PageNotFoundModule {}