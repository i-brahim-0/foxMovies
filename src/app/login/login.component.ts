import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private _FormBuilder: FormBuilder) {
    this.loginForm = this._FormBuilder.group({
      user_name: [null, [Validators.required, Validators.minLength(6)]],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });
  }
  ngOnInit(): void {}

  submitLoginForm(formData: FormGroup) {
    console.log(formData);
  }
}
