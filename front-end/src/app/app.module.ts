import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminPanelComponent, EditUserDialog } from './admin-panel/admin-panel.component';
import {UserService} from './service/user.service';
import { HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatTableModule, MatIconModule, MatInputModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatSnackBarModule } from "@angular/material";
import {MatSelectModule} from '@angular/material/select';

import { httpInterceptorProviders } from './auth/auth-interceptor';
import { MyPanelComponent } from './my-panel/my-panel.component';
import { ConsultationsComponent } from './consultations/consultations.component';
import {MatCardModule} from '@angular/material/card';
import {ConsultationsService} from './service/consultations.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminPanelComponent,
    EditUserDialog,
    LoginComponent,
    RegisterComponent,
    MyPanelComponent,
    ConsultationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSelectModule,
    MatCardModule,
  ],
  entryComponents: [
    EditUserDialog,
  ],
  providers: [
    UserService,
    ConsultationsService,
    httpInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
