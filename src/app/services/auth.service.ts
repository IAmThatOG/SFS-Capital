import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SignUpRequest } from '../models/Request/sign-up-request';
import { Observable, BehaviorSubject } from 'rxjs';
import { SignUpResponse } from '../models/Response/sign-up-response';
import { AuthResponse } from '../models/Response/confirm-otp-response';
import { ConfirmOtpRequest } from '../models/Request/confirm-otp-request';
import { Utils } from '../shared/utils';
import { ApiEndpointKeys } from '../shared/api-endpoint-keys.enum';
import { UserData } from '../models/user-data';
import { LoginRequest } from '../models/Request/login-request';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private x: BehaviorSubject<any> = new BehaviorSubject<any>({});

  private _userData: UserData;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  };

  constructor(private httpClient: HttpClient) { }

  public get userData(): UserData {
    return this._userData;
  }

  public set userData(v: UserData) {
    this._userData = v;
  }

  createAccount(signUpReq: SignUpRequest): Observable<SignUpResponse> {
    return this.httpClient.post<SignUpResponse>(
      `${Utils.apiBaseUrl}api/Customer/create`,
      signUpReq,
      this.httpOptions
    );
  }

  confirmOtp(request: ConfirmOtpRequest): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(
      `${Utils.apiBaseUrl}api/Customer/verify`,
      request,
      this.httpOptions
    );
  }

  login(request: LoginRequest): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(
      `${Utils.apiBaseUrl}api/Customer/login`,
      request,
      this.httpOptions
    );
  };
}
