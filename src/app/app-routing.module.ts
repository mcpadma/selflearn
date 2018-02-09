import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardMComponent } from './components/dashboard-m/dashboard-m.component';
import { PrintComponent } from './components/print/print.component';
import { CancelComponent } from './components/cancel/cancel.component';
import { EditComponent } from './components/edit/edit.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { 
    path: 'dashboard',
    component: DashboardMComponent
  },
  {
    path: 'print',
    component: PrintComponent
  },
  {
    path: 'cancel',
    component: CancelComponent
  },
  {
    path: 'edit',
    component: EditComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '', 
    redirectTo: 'dashboard', 
    pathMatch: 'full' 
  },
  {
    path: '**', 
    redirectTo: 'dashboard' , 
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
