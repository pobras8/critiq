import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from './core-module-guard';
import { LoggerService } from './logger/logger.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    providers: [
        LoggerService
    ]
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
      }
}
