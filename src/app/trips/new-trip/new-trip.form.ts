import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {FormValidationsService} from "../../core/forms/form-validations.service";

@Component({
  selector: 'app-new-trip-form',
  templateUrl: './new-trip.form.html',
  styleUrls: ['./new-trip.form.scss']
})
export class NewTripForm implements OnInit {
  public form: FormGroup;

  public agencies = [
    {
      id: 'space-y',
      name: '🛴 Space Y',
    },
    {
      id: 'green-origin',
      name: '🏴‍☠️ Green Origin',
    },
    {
      id: 'virgin-way',
      name: '🏍 Virgin Way',
    },
  ]
  constructor(formBuilder: FormBuilder, fvs: FormValidationsService) {
    this.form = formBuilder.group({
      agencyId: new FormControl('', [Validators.required]),
      destination: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      places: new FormControl(1,[Validators.required, Validators.min(1), Validators.max(10)]),
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      flightPrice: new FormControl(1,[Validators.required, Validators.min(1000000), Validators.max(10000000)]),
    },{
      // configuración a nivel de formulario
      validators:[fvs.datesMatch]
    });
  }

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

    errorMessage += errors['max']
      ? `🔥 Less than ${errors['max'].max}`
      : '';
    errorMessage += errors['min']
      ? `🔥 More than ${errors['min'].min}`
      : '';

    return errorMessage;
  }


  public getDatesMatchMessage(){
    const errors = this.form.errors;
    if(!errors) return '';
    if (errors['datesMatch']) return errors['datesMatch'];
    return '';
  }


  public getControl(controlName: string): AbstractControl | null {
    return this.form.get(controlName);
  }

  ngOnInit(): void {
  }

  onSave(){
    // desestructuración
    const { agencyId, destination, places, startDate, endDate, flightPrice } = this.form.value;
    const id = this.getDashId(agencyId);
    // estructuración
    const newTripData = { id, destination, places, startDate, endDate, flightPrice }
    console.warn('Send trip data ', newTripData);
  }

  private getDashId(str: string): string {
    return str.toLocaleLowerCase().replace(/ /g, '-');
  }

}
