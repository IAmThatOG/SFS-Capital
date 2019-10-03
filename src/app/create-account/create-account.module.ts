import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAccountComponent } from './create-account.component';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path: 'create-account', component: CreateAccountComponent}
];

@NgModule({
  declarations: [
    CreateAccountComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class CreateAccountModule { }
