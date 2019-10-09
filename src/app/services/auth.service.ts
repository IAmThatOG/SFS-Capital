import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { SignUpRequest } from '../models/Request/sign-up-request';
import { Observable, BehaviorSubject } from 'rxjs';
import { SignUpResponse } from '../models/Response/sign-up-response';
import { AuthResponse } from '../models/Response/confirm-otp-response';
import { ConfirmOtpRequest } from '../models/Request/confirm-otp-request';
import { Utils } from '../shared/utils';
import { ApiEndpointKeys } from '../shared/api-endpoint-keys.enum';
import { UserData } from '../models/user-data';
import { LoginRequest } from '../models/Request/login-request';
import { ResendOtpRequest } from '../models/Request/resend-otp-request';
import { ResendOtpResponse } from '../models/Response/resend-otp-response';
import { utils } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private x: BehaviorSubject<any> = new BehaviorSubject<any>({});

  private _userData: UserData;

  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private httpClient: HttpClient) { }

  public get userData(): UserData {
    return this._userData;
  }

  public set userData(v: UserData) {
    this._userData = v;
  }

  createAccount(signUpReq: SignUpRequest): Observable<HttpResponse<SignUpResponse>> {
    return this.httpClient.post<SignUpResponse>(
      `${Utils.apiBaseUrl}api/Customer/create`,
      signUpReq,
      {
        headers: Utils.setRequestHeader(),
        observe: 'response'
      }
    );
  }

  confirmOtp(request: ConfirmOtpRequest): Observable<HttpResponse<AuthResponse>> {
    return this.httpClient.post<AuthResponse>(
      `${Utils.apiBaseUrl}api/Customer/verify`,
      request,
      {
        headers: Utils.setRequestHeader(),
        observe: 'response'
      }
    );
  }

  login(request: LoginRequest): Observable<HttpResponse<AuthResponse>> {
    return this.httpClient.post<AuthResponse>(
      `${Utils.apiBaseUrl}api/Customer/login`,
      request,
      {
        headers: Utils.setRequestHeader(),
        observe: 'response'
      }
    );
  }

  resendOtp(request: ResendOtpRequest, authToken: string): Observable<HttpResponse<SignUpResponse>> {
    return this.httpClient.post<SignUpResponse>(
      `${Utils.apiBaseUrl}api/Customer/resendtoken`,
      request,
      {
        headers: Utils.setRequestHeader(authToken),
        observe: 'response'
      }
    );
  }
}
