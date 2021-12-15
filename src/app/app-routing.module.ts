import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'blogen',
    loadChildren: './frontend/frontend.module#FrontendModule'
  },
  {
    path: '**',
    redirectTo: 'blogen/dasboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
