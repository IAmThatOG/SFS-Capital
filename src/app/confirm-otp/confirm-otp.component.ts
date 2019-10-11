import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageKeys } from '../shared/local-storage-keys.enum';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ConfirmOtpRequest } from '../models/Request/confirm-otp-request';
import { AuthService } from '../services/auth.service';
import { AuthResponse } from '../models/Response/confirm-otp-response';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { AlertMsgService, AlertType } from '../services/alert-msg.service';
import { Utils } from '../shared/utils';

@Component({
  selector: 'app-confirm-otp',
  templateUrl: './confirm-otp.component.html',
  styleUrls: ['./confirm-otp.component.css', '../app.component.css']
})
export class ConfirmOtpComponent implements OnInit {

  confirmOtpForm: FormGroup;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private authService: AuthService,
              private readonly _alert: AlertMsgService) { }

  ngOnInit() {
    this.alert.show();
    this.confirmOtpForm = this.formBuilder.group(
      {
        otp: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
      });
  }

  public get alert(): AlertMsgService {
    return this._alert;
  }

  public get otp(): AbstractControl {
    return this.confirmOtpForm.get('otp');
  }

  navigateToSignUp(): void {
    this.router.navigate(['create-account']);
  }

  navigateToDashboard(): void {
    this.router.navigate(['dashboard']);
  }

  confirmOtp(): void {
    const cachedPhoneNumber = sessionStorage.getItem(LocalStorageKeys.PHONE_NUMBER);
    const cachedOtpRef = sessionStorage.getItem(LocalStorageKeys.OTP_REF);
    const request: ConfirmOtpRequest = {
      otp: this.otp.value,
      otpRef: +cachedOtpRef,
      phoneNumber: cachedPhoneNumber
    };
    this.authService.confirmOtp(request)
      .subscribe(
        (value: HttpResponse<AuthResponse>) => {
          console.log(value);
          if (value.body.data) {
            // redirect to dashboard
            localStorage.setItem(LocalStorageKeys.USER_DATA, JSON.stringify(value.body.data));
            localStorage.setItem(LocalStorageKeys.AUTH_TOKEN, value.headers.get(LocalStorageKeys.AUTH_TOKEN));
            this.navigateToDashboard();
            if (value.body.data.isVerified) {
              this.navigateToDashboard();
            } else {
              this.alert.type = AlertType.DANGER;
              this.alert.msg = 'Failed to confirm OTP';
              this.alert.show();
            }
          } else {
            this.alert.type = AlertType.DANGER;
            this.alert.msg = value.body.message;
            this.alert.show();
          }
        },
        (error: HttpErrorResponse) => {
          this.alert.msg = Utils.handleError(error);
          this.alert.type = AlertType.DANGER;
          this.alert.show();
          console.log(error);
        }
      );
  }
}
