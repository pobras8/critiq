import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { MoviesRoutingModule } from './movies-routing.module';

import { MoviesComponent } from './movies.component';

@NgModule({
    imports: [
        SharedModule,
        MoviesRoutingModule
    ],
    declarations: [MoviesComponent]
})
export class MoviesModule {}
