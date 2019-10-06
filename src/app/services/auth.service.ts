import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SignUpRequest } from '../models/Request/sign-up-request';
import { Observable, BehaviorSubject } from 'rxjs';
import { SignUpResponse } from '../models/Response/sign-up-response';
import { ConfirmOtpResponse } from '../models/Response/confirm-otp-response';
import { ConfirmOtpRequest } from '../models/Request/confirm-otp-request';
import { Utils } from '../shared/utils';
import { ApiEndpointKeys } from '../shared/api-endpoint-keys.enum';
import { UserData } from '../models/user-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private x: BehaviorSubject<any> = new BehaviorSubject<any>({});

  private _userData: UserData;

  constructor(private httpClient: HttpClient) { }
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  };

  createAccount(signUpReq: SignUpRequest): Observable<SignUpResponse> {
    return this.httpClient.post<SignUpResponse>(
      `${Utils.apiBaseUrl}api/Customer/create`,
      signUpReq,
      this.httpOptions
    );
  }

  confirmOtp(request: ConfirmOtpRequest): Observable<ConfirmOtpResponse> {
    return this.httpClient.post<ConfirmOtpResponse>(
      `${Utils.apiBaseUrl}api/Customer/verify`,
      request,
      this.httpOptions
    );
  }

  public get userData(): UserData {
    return this._userData;
  }

  public set userData(v: UserData) {
    this._userData = v;
  }

}
