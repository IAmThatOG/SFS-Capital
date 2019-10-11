import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { SignUpRequest } from '../models/Request/sign-up-request';
import { Observable } from 'rxjs';
import { SignUpResponse } from '../models/Response/sign-up-response';
import { AuthResponse } from '../models/Response/confirm-otp-response';
import { ConfirmOtpRequest } from '../models/Request/confirm-otp-request';
import { Utils } from '../shared/utils';
import { UserData } from '../models/user-data';
import { LoginRequest } from '../models/Request/login-request';
import { ResendOtpRequest } from '../models/Request/resend-otp-request';
import { LocalStorageKeys } from '../shared/local-storage-keys.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private x: BehaviorSubject<any> = new BehaviorSubject<any>({});

  private _userData: UserData;

  constructor(private httpClient: HttpClient) {
  }

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

  resendOtp(request: ResendOtpRequest): Observable<HttpResponse<SignUpResponse>> {
    return this.httpClient.post<SignUpResponse>(
      `${Utils.apiBaseUrl}api/Customer/resendtoken`,
      request,
      {
        headers: Utils.setRequestHeader(Utils.getAuthToken()),
        observe: 'response'
      }
    );
  }

  logout(): void {
    localStorage.clear();
    sessionStorage.clear();
  }
}
