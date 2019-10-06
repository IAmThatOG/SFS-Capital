import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
