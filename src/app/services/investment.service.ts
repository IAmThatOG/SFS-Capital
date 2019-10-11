import { Injectable } from '@angular/core';
import { HttpResponse, HttpClient, HttpRequest } from '@angular/common/http';
import { FixedIncomeResponse } from '../models/Response/fixed-income-response';
import { Observable } from 'rxjs';
import { Utils } from '../shared/utils';
import { LocalStorageKeys } from '../shared/local-storage-keys.enum';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {

  constructor(private httpClient: HttpClient) { }

  getFixedIncomeFund(): Observable<HttpResponse<FixedIncomeResponse>> {
    return this.httpClient.get<FixedIncomeResponse>(
      `${Utils.apiBaseUrl}api/FixedIncomeFund`,
      {
        headers: Utils.setRequestHeader(Utils.getAuthToken()),
        observe: 'response'
      }
    );
  }
}
