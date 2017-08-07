import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminReportComponent } from './components/admin-report/admin-report.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import {ValidateService } from './services/validate.service';
import {RegisterUserService } from './services/register-user.service';
import { FlashMessagesModule } from 'angular2-flash-messages'

const appRoutes: Routes = [
    {path: "register", component: RegisterComponent},
    {path: "adminReport", component: AdminReportComponent},
    {path: "navbar", component: NavbarComponent},
    {path: "confirmation", component: ConfirmationComponent}
    ]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    AdminReportComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule

  ],
  providers: [ValidateService, RegisterUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
