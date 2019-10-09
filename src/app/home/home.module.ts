import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild(routes)
  ],
})
export class HomeModule { }
