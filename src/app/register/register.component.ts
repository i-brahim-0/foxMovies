import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    first_name: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
    ]),
    last_name: new FormControl(null, [Validators.minLength(6)]),
    age: new FormControl('', [Validators.required, Validators.min(16)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(private _AuthService: AuthService, private _Router: Router) {}

  // registerForm: FormGroup;
  // constructor(private _FormBuilder: FormBuilder) {
  //   this.registerForm = this._FormBuilder.group({
  //     first_name: ['', [Validators.required, Validators.minLength(6)]],
  //     last_name: new FormControl('', [Validators.minLength(6)]),
  //     age: new FormControl('', [Validators.required, Validators.max(16)]),
  //     email: new FormControl('', [Validators.required, Validators.email]),
  //     password: new FormControl('', [
  //       Validators.required,
  //       Validators.minLength(6),
  //     ]),
  //   });
  //   this.registerForm.get('first_name')?.updateValueAndValidity();
  // }

  ngOnInit(): void {}

  submitRegisterForm(registerForm: FormGroup) {
    this._AuthService.register(registerForm.value).subscribe((response) => {
      if (response.success == true) {
        console.log(response);
        this._Router.navigate(['/login']);
      }
    });
  }
}
