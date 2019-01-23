import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'public/home',
    loadChildren: './home-page/home-page.module#HomePageModule',
  },
  {
    path: 'public/execs',
    loadChildren: './exec-page/exec-page.module#ExecPageModule'
  },
  {
    path: 'public/about',
    loadChildren: './about-page/about-page.module#AboutPageModule'
  },
  {
    path: 'public/events',
    loadChildren: './events-page/events-page.module#EventsPageModule'
  },
  {
    path: 'public/projects',
    loadChildren: './project-page/project-page.module#ProjectPageModule'
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  },
  {
    path: '',
    redirectTo: '/public/home',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
