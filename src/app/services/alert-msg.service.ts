import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

export interface AlertMsg {
  message: string;
  type: AlertType;
}

export enum AlertType {
  DANGER = 'danger',
  SUCCESS = 'success',
  INFO = 'info'
}

@Injectable({
  providedIn: 'root'
})
export class AlertMsgService {

  private _subject = new Subject<string>();
  private _msg: string;
  private _alertMsg: AlertMsg;
  private _type: string

  constructor() { }

  configure(): void {
    this._subject.subscribe((message) => this._msg = message);
    this._subject.pipe(debounceTime(5000)).subscribe(() => this._msg = null);
  }

  // show(alert: AlertMsg): void {
  //   this._subject.next(alert);
  // }

  show(alertType: AlertType, message: string): void {
    this._type = alertType;
    this._msg = message;
    this._subject.next(message);
  }

  public get alertMsg(): AlertMsg {
    return this._alertMsg;
  }


  public set alertMsg(v: AlertMsg) {
    this._alertMsg = v;
  }


  public get type(): string {
    return this._type;
  }


  public set type(v: string) {
    this._type = v;
  }

  public get msg(): string {
    return this._msg;
  }

  public set msg(v: string) {
    this._msg = v;
  }

}
