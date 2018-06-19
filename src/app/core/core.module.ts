import { NgModule, Optional, SkipSelf } from '@angular/core';

import { throwIfAlreadyLoaded } from './core-module-guard';
import { SharedModule } from '../shared/shared.module';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { HomeModule } from '../home/home.module';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { LoggerService } from './logger/logger.service';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        PageNotFoundComponent
    ],
    exports: [
        HeaderModule,
        FooterModule,
        HomeModule
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
