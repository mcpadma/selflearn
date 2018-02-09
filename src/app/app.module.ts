import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardMComponent } from './components/dashboard-m/dashboard-m.component';
import { PrintComponent } from './components/print/print.component';
import { CancelComponent } from './components/cancel/cancel.component';
import { EditComponent } from './components/edit/edit.component';
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardMComponent,
    PrintComponent,
    CancelComponent,
    EditComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
