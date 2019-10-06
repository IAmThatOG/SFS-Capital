import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmOtpComponent } from './confirm-otp.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'confirm-otp', component: ConfirmOtpComponent }
];

@NgModule({
  declarations: [
    ConfirmOtpComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class ConfirmOtpModule { }
