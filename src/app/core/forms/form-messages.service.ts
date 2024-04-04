import {Injectable} from '@angular/core';
import {AbstractControl, Form, FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class FormMessagesService {

  constructor() {
  }

  public hasError(form: FormGroup, controlName: string): boolean {
    const control = this.getControl(form, controlName);
    if (!control) return false;
    return control.invalid;
  }

  private getControl(
    form: FormGroup,
    controlName: string): AbstractControl | null {
    return form.get(controlName);
  }



  public mustShowMessage(
    form: FormGroup,
    controlName: string): boolean {
    const control = this.getControl(form, controlName);
    if (!control) return false;
    return control.invalid && control.touched;
  }

  public getErrorMessage(
    form: FormGroup,
    controlName: string): string {
    const control = this.getControl(form, controlName);
    if (!control) return 'no existe';
    if (!control.errors) return '';
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

    errorMessage += errors['max']
      ? `🔥 Less than ${errors['max'].max}`
      : '';
    errorMessage += errors['min']
      ? `🔥 More than ${errors['min'].min}`
      : '';

    return errorMessage;
  }

/*  public getPasswordMatchMessage(
    form: FormGroup,
    controlName: string): string {
    //const errors = this.getControl(form, controlName);
    const errorsControl = this.getErrorControl(form, controlName);
    const errorsForm = form.errors;
    if (!errorsControl && !errorsForm) return '';

    console.log(errorsForm);
    //if (errorsControl['passwordMatch']) return errorsControl['passwordMatch'];
    // @ts-ignore
    if(errorsForm) return errorsForm.passwordMatch;
    return ''
  }*/

}
