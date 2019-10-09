import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { LoginRequest } from '../models/Request/login-request';
import { AuthService } from '../services/auth.service';
import { AuthResponse } from '../models/Response/confirm-otp-response';
import { LocalStorageKeys } from '../shared/local-storage-keys.enum';
import { HttpResponse } from '@angular/common/http';
import { AlertMsgService, AlertMsg, AlertType } from '../services/alert-msg.service';
import { Utils } from '../shared/utils';

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
    private authService: AuthService,
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


  navigateToCreateAccount(): void {
    this.router.navigate(['create-account']);
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

  submitLoginForm(): void {
    const loginReq: LoginRequest = this.loginForm.value;
    this.authService.login(loginReq)
      .subscribe((value: HttpResponse<AuthResponse>) => {
        if (value.body.data && value.body.data.isVerified) {
          // redirect to dashboard
          console.log(value);
          localStorage.setItem(LocalStorageKeys.USER_DATA, JSON.stringify(value.body.data));
          localStorage.setItem(LocalStorageKeys.AUTH_TOKEN, value.headers.get(LocalStorageKeys.AUTH_TOKEN));
          this.authService.userData = value.body.data;
          this.navigateToDashboard();
        } else {
          this.alert.show(AlertType.DANGER, value.body.message);
        }
      },
        (error: any) => {
          this.alert.show(AlertType.DANGER, Utils.httpErrorMsg);
        });
  }
}
