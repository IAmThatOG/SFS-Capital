import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FixedIncome } from '../models/fixed-income';
import { InvestmentService } from '../services/investment.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FixedIncomeResponse } from '../models/Response/fixed-income-response';
import { Utils } from '../shared/utils';
import { AlertMsgService, AlertType } from '../services/alert-msg.service';
import { Router } from '@angular/router';
import { UserData } from '../models/user-data';
import { LocalStorageKeys } from '../shared/local-storage-keys.enum';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', '../app.component.css']
})
export class DashboardComponent implements OnInit {

  private _fixedIncome: FixedIncome;
  private _user: UserData;

  constructor(
    private _authService: AuthService,
    private _investmentService: InvestmentService,
    private readonly _alert: AlertMsgService,
    private readonly router: Router
  ) { }

  ngOnInit() {
    this._investmentService.getFixedIncomeFund()
      .subscribe(
        (value: HttpResponse<FixedIncomeResponse>) => {
          if (value.body.status) {
            this._user = JSON.parse(localStorage.getItem(LocalStorageKeys.USER_DATA)) as UserData;
            this._fixedIncome = value.body.data || {
              initialSubscriptionValue: 0,
              totalAvailableBalance: 0,
              totalInterestEarned: 0,
              lastSubscriptionValue: 0,
              lastSubscriptionDate: '',
              lastWithdrawalValue: 0,
              lastWithdrawalDate: '',
              ledgerBalance: 0
            };
          }
        },
        (error: HttpErrorResponse) => {
          if (error.status === 401) {
            this.router.navigate(['login']);
            this._authService.logout();
          } else {
            this._alert.msg = Utils.handleError(error);
            this._alert.type = AlertType.DANGER;
            this._alert.show();
          }
        }
      );
  }

  public get user(): UserData {
    return this._user;
  }

  public set user(v: UserData) {
    this._user = v;
  }
  
  private navigateToLogin(): void {
    this._authService.logout();
    this.router.navigate(['login']);
  }

  public get alert(): AlertMsgService {
    return this._alert;
  }

  public get fixedIncome(): FixedIncome {
    return this._fixedIncome;
  }

  public set fixedIncome(v: FixedIncome) {
    this._fixedIncome = v;
  }
}
