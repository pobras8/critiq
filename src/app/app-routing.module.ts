import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const appRoutes: Routes = [
    {
        path: 'home',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
    // Future paths/paths to be lazy loaded!
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}