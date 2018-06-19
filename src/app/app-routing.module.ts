import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const appRoutes: Routes = [
    {
        path: 'home',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: 'games',
        loadChildren: './games/games.module#GamesModule'
    },
    {
        path: 'movies',
        loadChildren: './movies/movies.module#MoviesModule'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {
        preloadingStrategy: PreloadAllModules
    })],
    exports: [RouterModule]
})
export class AppRoutingModule {}