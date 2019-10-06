import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

import { Subscription } from 'rxjs';
import { ApiEndpointKeys } from './api-endpoint-keys.enum';

export class Utils {
  static apiBaseUrl = 'http://sfs-digital.herokuapp.com/';
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

}
