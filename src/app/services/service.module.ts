import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { Utils } from '../shared/utils';
import { InvestmentService } from './investment.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    InvestmentService
  ]
})
export class ServiceModule {

  constructor(@Optional() @SkipSelf() parentModule: ServiceModule) {
    Utils.throwIfAlreadyLoaded(parentModule, 'ServiceModule');
  }
}
