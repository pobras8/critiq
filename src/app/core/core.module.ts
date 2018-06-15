import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { throwIfAlreadyLoaded } from './core-module-guard';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { LoggerService } from './logger/logger.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        PageNotFoundComponent
    ],
    providers: [
        LoggerService
    ]
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
      }
}
