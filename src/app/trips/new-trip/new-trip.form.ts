import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {FormValidationsService} from "../../core/forms/form-validations.service";
import {FormMessagesService} from "../../core/forms/form-messages.service";
import {FormCommonUtilitiesService} from "../../core/forms/form-common-utilities.service";

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
  constructor(formBuilder: FormBuilder,
              fvs: FormValidationsService,
              public fms: FormMessagesService,
              public fcus: FormCommonUtilitiesService) {
    this.form = formBuilder.group({
      agencyId: new FormControl('',  [Validators.required]),
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

  public mustShowMessage(controlName: string): boolean {
    return this.fms.mustShowMessage(this.form, controlName);
  }

  public getErrorMessage(controlName: string): string {
    return this.fms.getErrorMessage(this.form, controlName);
  }


  public getDatesMatchMessage(){
    const errors = this.form.errors;
    if(!errors) return '';
    if (errors['datesMatch']) return errors['datesMatch'];
    return '';
  }


  public hasError(controlName: string): boolean {
    return this.fms.hasError(this.form, controlName);
  }

  public getControl(controlName: string): AbstractControl | null {
    return this.form.get(controlName);
  }

  ngOnInit(): void {
  }

  onSave(){
    // desestructuración
    const { agencyId, destination, places, startDate, endDate, flightPrice } = this.form.value;
    const id = this.fcus.getDashId(agencyId);
    // estructuración
    const newTripData = { id, destination, places, startDate, endDate, flightPrice }
    console.warn('Send trip data ', newTripData);
  }

  private getDashId(str: string): string {
    return str.toLocaleLowerCase().replace(/ /g, '-');
  }

}
