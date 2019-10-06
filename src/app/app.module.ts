import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { CreateAccountModule } from './create-account/create-account.module';
import { LoginModule } from './login/login.module';
import { ServiceModule } from './services/service.module';
import { ConfirmOtpModule } from './confirm-otp/confirm-otp.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';
// import { CompareValidatorDirective } from './shared/compare-validator.directive';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    // CompareValidatorDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    HomeModule,
    CreateAccountModule,
    LoginModule,
    ServiceModule,
    ConfirmOtpModule,
    DashboardModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
