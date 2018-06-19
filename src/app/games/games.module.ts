import { NgModule } from '@angular/core';

import { GamesRoutingModule } from './games-routing.module';
import { SharedModule } from '../shared/shared.module';

import { GamesComponent } from './games.component';

@NgModule({
    imports: [
        SharedModule,
        GamesRoutingModule
    ],
    declarations: [GamesComponent]
})
export class GamesModule {}
