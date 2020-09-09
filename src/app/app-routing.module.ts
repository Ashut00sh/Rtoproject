import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { VehicleinfoComponent } from './vehicleinfo/vehicleinfo.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ErrorpComponent } from './errorp/errorp.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'Home',
    component: HomeComponent,
    children: [
      { path: 'Vehicleinfo', component: VehicleinfoComponent },
      { path: 'contactus', component: ContactusComponent },
    ],
  },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: ErrorpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
