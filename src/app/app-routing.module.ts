import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { PagesRoutingModule } from './pages/pages.routing';

const routes: Routes = [
  { path: '', redirectTo: '/admin', pathMatch: 'full' },
  { path: '**', component: NoPageFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PagesRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
