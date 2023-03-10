import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from "./features/feed/feed.component";
import { HomeComponent } from "./features/home/home.component";

const routes: Routes = [
{ path: 'feed', title: 'Feed', loadComponent: () => import('./features/feed/feed.component').then(mod => mod.FeedComponent)},
{ path: 'home', title: 'Home', loadComponent: () => import('./features/home/home.component').then(mod => mod.HomeComponent)},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
