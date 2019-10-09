import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageKeys } from '../shared/local-storage-keys.enum';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ConfirmOtpRequest } from '../models/Request/confirm-otp-request';
import { AuthService } from '../services/auth.service';
import { AuthResponse } from '../models/Response/confirm-otp-response';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-confirm-otp',
  templateUrl: './confirm-otp.component.html',
  styleUrls: ['./confirm-otp.component.css', '../app.component.css']
})
export class ConfirmOtpComponent implements OnInit {

  confirmOtpForm: FormGroup;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService) { }

  ngOnInit() {
    this.confirmOtpForm = this.formBuilder.group(
      {
        otp: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
      });
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
    const cachedPhoneNumber = localStorage.getItem(LocalStorageKeys.PHONE_NUMBER);
    const cachedOtpRef = localStorage.getItem(LocalStorageKeys.OTP_REF);
    const request: ConfirmOtpRequest = {
      otp: this.otp.value,
      otpRef: +cachedOtpRef,
      phoneNumber: cachedPhoneNumber
    };
    this.authService.confirmOtp(request)
      .subscribe(
        (value: HttpResponse<AuthResponse>) => {
          console.log(value);
          if (value.body.data && value.body.data.isVerified) {
            // redirect to dashboard
            localStorage.setItem(LocalStorageKeys.USER_DATA, JSON.stringify(value.body.data));
            localStorage.setItem(LocalStorageKeys.AUTH_TOKEN, value.headers.get(LocalStorageKeys.AUTH_TOKEN));
            this.authService.userData = value.body.data;
            this.navigateToDashboard();
          }
        },
        (error: any) => console.log(error)
      );
  }
}
