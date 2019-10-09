import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { LoginRequest } from '../models/Request/login-request';
import { AuthService } from '../services/auth.service';
import { AuthResponse } from '../models/Response/confirm-otp-response';
import { LocalStorageKeys } from '../shared/local-storage-keys.enum';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { AlertMsgService, AlertMsg, AlertType } from '../services/alert-msg.service';
import { Utils } from '../shared/utils';
import { ResendOtpRequest } from '../models/Request/resend-otp-request';
import { ResendOtpResponse } from '../models/Response/resend-otp-response';
import { SignUpResponse } from '../models/Response/sign-up-response';
import { ErrorResponse } from '../models/Response/error-response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../app.component.css']
})
export class LoginComponent implements OnInit {

  // public alertMsg: AlertMsg;

  private _loginForm: FormGroup;
  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private _authService: AuthService,
    private _alert: AlertMsgService) { }

  ngOnInit() {
    this.alert.configure();
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  public get alert(): AlertMsgService {
    return this._alert;
  }

  public get loginForm(): FormGroup {
    return this._loginForm;
  }

  public set loginForm(v: FormGroup) {
    this._loginForm = v;
  }

  public get userName(): AbstractControl {
    return this.loginForm.get('userName');
  }

  public get password(): AbstractControl {
    return this.loginForm.get('password');
  }

  navigateToDashboard(): void {
    this.router.navigate(['dashboard']);
  }

  navigateToCreateAccount(): void {
    this.router.navigate(['create-account']);
  }

  navigateToConfirmOtp(): void {
    this.router.navigate(['confirm-otp']);
  }

  handleResendOtpLogic(email: string, phoneNumber: string): void {
    const resendOtpReq: ResendOtpRequest = {
      email,
      phoneNumber
    };
    const authToken = localStorage.getItem(LocalStorageKeys.AUTH_TOKEN);
    this._authService.resendOtp(resendOtpReq, authToken)
      .subscribe(
        (value: HttpResponse<SignUpResponse>) => {
          if (value.body && value.body.data.otpRef) {
            sessionStorage.setItem(LocalStorageKeys.OTP_REF, value.body.data.otpRef);
            sessionStorage.setItem(LocalStorageKeys.PHONE_NUMBER, phoneNumber);
            this.alert.msg = value.body.message + '...Please check your email';
            this.alert.type = AlertType.SUCCESS;
            this.navigateToConfirmOtp();
          }
        },
        (error: HttpErrorResponse) => {
          this.alert.type = AlertType.DANGER;
          this.alert.msg = Utils.handleError(error);
          this.alert.show();
        }
      );
  }

  submitLoginForm(): void {
    const loginReq: LoginRequest = this.loginForm.value;
    this._authService.login(loginReq)
      .subscribe(
        (value: HttpResponse<AuthResponse>) => {
          if (value.body.data) {
            // redirect to dashboard
            console.log(value);
            localStorage.setItem(LocalStorageKeys.USER_DATA, JSON.stringify(value.body.data));
            localStorage.setItem(LocalStorageKeys.AUTH_TOKEN, value.headers.get(LocalStorageKeys.AUTH_TOKEN));
            this._authService.userData = value.body.data;
            if (value.body.data.isVerified) {
              this.navigateToDashboard();
            } else {
              this.handleResendOtpLogic(value.body.data.email, value.body.data.phoneNumber);
            }
          } else {
            this.alert.msg = value.body.message;
            this.alert.type = AlertType.DANGER;
            this.alert.show();
          }
        },
        (errorRes: HttpErrorResponse) => {
          this.alert.msg = Utils.handleError(errorRes);
          this.alert.type = AlertType.DANGER;
          this.alert.show();
          console.log(errorRes);
          // this.alert.show(AlertType.DANGER, Utils.httpErrorMsg);
        }
      );
  }
}
