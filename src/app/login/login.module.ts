import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { AlertMessageModule } from '../alert-message/alert-message.module';

const routes: Routes = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    NgbModule
  ]
})
export class LoginModule { }
