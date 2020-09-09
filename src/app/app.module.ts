import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ErrorpComponent } from './errorp/errorp.component';
import { HomeComponent } from './home/home.component';
import { VehicleinfoComponent } from './vehicleinfo/vehicleinfo.component';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, ErrorpComponent, HomeComponent, VehicleinfoComponent, ContactusComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
