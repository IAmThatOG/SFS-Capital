// import { Directive, Input } from '@angular/core';
// import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
// import { Subscription } from 'rxjs';

// export function compareValidator(controlName: string): ValidatorFn{
//   return (control: AbstractControl): ValidationErrors => {
//     if (control.value === null || control.value.length === 0) {
//       return null;
//     }
//     const controlToCompare = control.root.get(controlName);
//     if (controlToCompare) {
//       const subscription: Subscription = controlToCompare.valueChanges.subscribe(() => {
//         control.updateValueAndValidity();
//         subscription.unsubscribe();
//       });
//     }
//     return controlToCompare && controlToCompare.value !== control.value ? { compare: true } : null;
//   };
// }

// @Directive({
//   selector: '[compare]',
//   providers: [{ provide: NG_VALIDATORS, useExisting: CompareValidatorDirective, multi: true }]
// })
// export class CompareValidatorDirective implements Validator {

//   @Input('compare') controlName: string;

//   constructor() { }

//   validate(control: AbstractControl): ValidationErrors {
//     return compareValidator(this.controlName)(control);
//   }

// }
