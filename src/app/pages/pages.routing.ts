import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  { path: 'admin', component: PagesComponent },
  // {
  //   path: 'admin',
  //   component: PagesComponent,
  //   // children: [
  //   //   // { path: '', component: DashboardComponent },
  //   //   // { path: 'progress', component: ProgressComponent },
  //   //   // { path: 'chart1', component: Chart1Component },
  //   //   // { path: 'account-settings', component: AccountSettingsComponent },
  //   // ],
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
