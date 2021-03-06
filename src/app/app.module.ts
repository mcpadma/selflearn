import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardMComponent } from './components/dashboard-m/dashboard-m.component';
import { PrintComponent } from './components/print/print.component';
import { CancelComponent } from './components/cancel/cancel.component';
import { EditComponent } from './components/edit/edit.component';
import { ContactComponent } from './components/contact/contact.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FooterComponent } from './components/footer/footer.component';
import { DatasService } from './datas.service';

import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardMComponent,
    PrintComponent,
    CancelComponent,
    EditComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
     HttpModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  providers: [DatasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
