import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

import { Subscription } from 'rxjs';
import { ApiEndpointKeys } from './api-endpoint-keys.enum';
import { AlertMsg, AlertType } from '../services/alert-msg.service';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ErrorResponse } from '../models/Response/error-response';
import { LocalStorageKeys } from './local-storage-keys.enum';

export class Utils {
  static apiBaseUrl = 'http://sfs-digital.herokuapp.com/';
  static httpErrorMsg = 'Something went wrong...please try again';
  urlmap: Map<ApiEndpointKeys, string> = new Map();

  static compareValidator(controlName: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors => {
      if (control.value === null || control.value.length === 0) {
        return null;
      }
      const controlToCompare = control.root.get(controlName);
      if (controlToCompare) {
        const subscription: Subscription = controlToCompare.valueChanges.subscribe(() => {
          control.updateValueAndValidity();
          subscription.unsubscribe();
        });
      }
      return controlToCompare && controlToCompare.value !== control.value ? { compare: true } : null;
    };
  }

  // checks if a module has already been loaded to avoid more than one module instance as
  // modules need to be singleton
  static throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
    if (parentModule) {
      throw new Error(`${moduleName} has already been loaded. Import service modules in app module only`);
    }
  }

  static handleHttpError(): AlertMsg {
    return {
      message: 'Something went wrong...please retry.',
      type: AlertType.DANGER
    };
  }

  static setRequestHeader(authToken?: string): HttpHeaders {
    if (authToken) {
      return new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: authToken
      });
    } else {
      return new HttpHeaders({
        'Content-Type': 'application/json'
      });
    }
  }

  static handleError(errorRes: HttpErrorResponse): string {
    let error = '';
    const errorMsgs: ErrorResponse = errorRes.error;
    for (const errorMsg of errorMsgs.data) {
      error += errorMsg.message + '\n';
    }
    return error;
  }

  static getAuthToken(): string {
    return `Bearer ${localStorage.getItem(LocalStorageKeys.AUTH_TOKEN)}`;
  }
}
