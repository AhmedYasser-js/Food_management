import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { RegisterComponent } from './components/login/register/register.componentt
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './components/register/register.component';
import { VerifyAcountComponent } from './components/verify-acount/verify-acount.component';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    VerifyAcountComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})

export class AuthModule { }
