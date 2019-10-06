import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Utils } from '../shared/utils';
import { AuthService } from '../services/auth.service';
import { SignUpResponse } from '../models/Response/sign-up-response';
import { LocalStorageKeys } from '../shared/local-storage-keys.enum';

// validator function
// function mustMatch(controlName: string, matchingControlName: string): ValidatorFn {
//   return (control: AbstractControl): { [key: string]: boolean } | null => {
//     const controlToCompare = control.root.get(controlName);
//     const matchingControl = control.root.get(matchingControlName);

//     // return if another validator has found an error on the matching control
//     if (matchingControl.errors && !matchingControl.errors.mustMatch) {
//       return;
//     }

//     console.log(`confirm password ${matchingControl.value}`);
//     // set error on matchingControl if match validation fails
//     if (matchingControl.value != null && (matchingControl.value === controlToCompare.value)) {
//       return { 'mustMatch': true };
//     }
//     return null;
//   }
// }

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css', '../app.component.css']
})
export class CreateAccountComponent implements OnInit {

  signupForm: FormGroup;
  private phoneNumberRegex = '^[+][0-9]*$';

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group(
      {
        firstName: ['', [Validators.required, Validators.minLength(2)]],
        lastName: ['', [Validators.required, Validators.minLength(2)]],
        phoneNumber:
          [
            '',
            [
              Validators.required,
              Validators.maxLength(14),
              Validators.minLength(14),
              Validators.pattern(this.phoneNumberRegex),
            ]
          ],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        comparePassword: [
          '',
          [
            Validators.required,
            Utils.compareValidator('password')
          ]
        ]
      }
    );
    console.log(this.signupForm.get('comparePassword').errors);
  }

  navigateToLogin(): void {
    this.router.navigate(['login']);
  }

  get firstName() {
    return this.signupForm.get('firstName');
  }

  get lastName() {
    return this.signupForm.get('lastName');
  }

  get phoneNumber() {
    return this.signupForm.get('phoneNumber');
  }

  get email() {
    return this.signupForm.get('email');
  }

  get password() {
    return this.signupForm.get('password');
  }

  get comparePassword() {
    return this.signupForm.get('comparePassword');
  }

  navigateToConfirmOtp(): void {
    this.router.navigate(['confirm-otp']);
  }

  submitSignUpForm(): void {
    console.log(`form_request => ${JSON.stringify(this.signupForm.value)}`);

    let result: SignUpResponse;
    this.authService.createAccount(this.signupForm.value)
      .subscribe(
        (response: SignUpResponse) => {
          console.log(response.message);
          result = response;
          console.log(JSON.stringify(result));
          if (result && result.status) {
            // redirect to otp page
            const otp: string = result.data.otpRef;
            console.log(`OTP => ${otp}`);
            localStorage.setItem(LocalStorageKeys.OTP_REF, otp);
            localStorage.setItem(LocalStorageKeys.PHONE_NUMBER, this.phoneNumber.value);
            this.navigateToConfirmOtp();
          }
        },
        (error: any) => console.log(error)
      );
  }
}
