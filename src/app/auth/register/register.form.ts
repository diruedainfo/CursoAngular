import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {FormValidationsService} from "../../core/forms/form-validations.service";
import {FormMessagesService} from "../../core/forms/form-messages.service";

@Component({
  selector: 'app-register-form',
  templateUrl: './register.form.html',
  styleUrls: ['./register.form.scss']
})
export class RegisterForm implements OnInit {
  public form : FormGroup;
  constructor(formBuilder: FormBuilder, fvs: FormValidationsService,
              public fms: FormMessagesService) {

    this.form = formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10),
      ]),
      acceptTerms: new FormControl(false, [Validators.requiredTrue]),

    },{
      // configuración a nivel de formulario
      validators:[fvs.passwordMatch]
    });
  }

  public getPasswordMatchMessage() {
    const errors = this.form.errors;
    if (!errors) return '';
    if (errors['passwordMatch']) return errors['passwordMatch'];
    return '';
  }

  /*public getPasswordMatchMessage(controlName: string){
    return this.fms.getPasswordMatchMessage(this.form, controlName);
  }*/

  ngOnInit(): void {}

  public hasError(controlName: string): boolean {
    return this.fms.hasError(this.form, controlName);
  }

  public mustShowMessage(controlName: string): boolean {
    return this.fms.mustShowMessage(this.form, controlName);
  }

  public getErrorMessage(controlName: string): string {
    return this.fms.getErrorMessage(this.form, controlName);
  }

  public onSave(){
    // desestructuración
    const {name, email, password} = this.form.value;
    // estructuración
    const register = { name, email, password };
    console.warn('Send register ', register);
  }

}
