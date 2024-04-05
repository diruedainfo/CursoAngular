import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {FormMessagesService} from "../../core/forms/form-messages.service";
import {FormBase} from "../../core/forms/form.base";

@Component({
  selector: 'app-login-form',
  templateUrl: './login.form.html',
  styleUrls: ['./login.form.scss']
})
export class LoginForm extends FormBase implements OnInit {
  constructor(formBuilder: FormBuilder,
              fms: FormMessagesService) {
    super(fms);
    this.form = formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10),
      ]),
    });
  }

  ngOnInit(): void {}

  public onSave(){
    // desestructuración
    const {email, password} = this.form.value;
    // estructuración
    const login = {email, password };
    console.warn('Send login ', login);
  }

}
