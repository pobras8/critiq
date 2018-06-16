import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
    imports: [CommonModule],
    exports: [
        CommonModule,
        FormsModule,
        MDBBootstrapModule,
        RouterModule
    ],
    declarations: [],
    schemas: [ NO_ERRORS_SCHEMA ]
})
export class SharedModule {}
