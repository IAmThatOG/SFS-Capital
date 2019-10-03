import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { SignupDto } from './models/signup-dto';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css', '../app.component.css']
})
export class CreateAccountComponent implements OnInit {

  signupForm: FormGroup;
  private signupDto: SignupDto;

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstname: ['', Validators.required, Validators.minLength(2)],
      lastname: ['', Validators.required, Validators.minLength(2)],
      phoneNumber: ['', Validators.required, Validators.maxLength(14), Validators.minLength(14)],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required, Validators.minLength(6)],
      confirmPassword: ['', Validators.required, Validators.minLength(6)]
    });
    console.log(this.signupForm.valid);
  }

  navigateToLogin(): void {
    this.router.navigate(['login']);
  }

  submitSignUpForm(): any {

  }
}
