import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MyPanelComponent } from './my-panel/my-panel.component';
import { ConsultationsComponent } from './consultations/consultations.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'admin-panel', component: AdminPanelComponent},
  { path: 'consultations', component: ConsultationsComponent},
  { path: 'my-panel', component: MyPanelComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
