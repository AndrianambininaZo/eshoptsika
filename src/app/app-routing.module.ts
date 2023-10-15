import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppClientComponent } from './client/app-client/app-client.component';
import { DasboardClientComponent } from './client/dasboard-client/dasboard-client.component';

const routes: Routes = [
  { path: '', component: AppClientComponent, children: [
    { path: '', component: DasboardClientComponent },
    //{ path: 'reports', component: ReportsComponent },
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
