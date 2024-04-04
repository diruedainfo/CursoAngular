import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {FormValidationsService} from "../../core/forms/form-validations.service";

@Component({
  selector: 'app-register-form',
  templateUrl: './register.form.html',
  styleUrls: ['./register.form.scss']
})
export class RegisterForm implements OnInit {
  public form : FormGroup;
  constructor(formBuilder: FormBuilder, fvs: FormValidationsService) {

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

  public getPasswordMatchMessage(){
    const errors = this.form.errors;
    if(!errors) return '';
    if (errors['passwordMatch']) return errors['passwordMatch'];
    return '';
  }

  ngOnInit(): void {}

  public hasError(controlName: string): boolean {
    const control = this.getControl(controlName);
    if (!control) return false;
    return control.invalid;
  }

  public mustShowMessage(controlName: string): boolean {
    const control = this.getControl(controlName);
    if (!control) return false;
    return control.invalid && control.touched;
  }

  public getControl(controlName: string): AbstractControl | null {
    return this.form.get(controlName);
  }

  public getErrorMessage(controlName: string): string {
    const control = this.getControl(controlName);
    if (!control) return 'no existe';
    if(!control.errors) return '';
    const errors = control.errors;
    let errorMessage = '';
    errorMessage += errors['required'] ? '🔥 Field is required' : '';
    errorMessage += errors['email'] ? '🔥 Should be an email address' : '';
    errorMessage += errors['minlength']
      ? `🔥 More than ${errors['minlength'].requiredLength} chars`
      : '';
    errorMessage += errors['maxlength']
      ? `🔥 Less than ${errors['maxlength'].requiredLength} chars`
      : '';
    return errorMessage;
  }

  public onSave(){
    // desestructuración
    const {name, email, password} = this.form.value;
    // estructuración
    const register = { name, email, password };
    console.warn('Send register ', register);
  }

}
