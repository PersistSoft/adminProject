import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BulkDataComponent } from '../components/bulk-data/bulk-data.component';
import { AuthGuard } from '../guards/auth.guard';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  { 
    path: 'admin', component: PagesComponent ,
    canActivate: [AuthGuard], data: {roles: ['ADMIN'] },
    children:[
      { path: 'bulkData', component: BulkDataComponent, data: { title: 'Bulk Data' } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
