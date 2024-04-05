import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {FormValidationsService} from "../../core/forms/form-validations.service";
import {FormMessagesService} from "../../core/forms/form-messages.service";
import {FormCommonUtilitiesService} from "../../core/forms/form-common-utilities.service";
import {FormBase} from "../../core/forms/form.base";
import {Agency} from "../../core/api/agency.interface";

@Component({
  selector: 'app-new-trip-form',
  templateUrl: './new-trip.form.html',
  styleUrls: ['./new-trip.form.scss']
})
export class NewTripForm extends FormBase implements OnInit {

  public agencies : Agency[] = [
    {
      id: 'space-y',
      name: '🛴 Space Y',
      range: 'Interplanetary',
      status: 'Active',
    },
    {
      id: 'green-origin',
      name: '🏴‍☠️ Green Origin',
      range: 'Orbital',
      status: 'Active',
    },
    {
      id: 'virgin-way',
      name: '🏍 Virgin Way',
      range: 'Orbital',
      status: 'Pending',
    },
  ]
  constructor(formBuilder: FormBuilder,
              fvs: FormValidationsService,
              fms: FormMessagesService,
              private fcus: FormCommonUtilitiesService) {
    super(fms);
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


  public getDatesMatchMessage(){
    const errors = this.form.errors;
    if(!errors) return '';
    if (errors['datesMatch']) return errors['datesMatch'];
    return '';
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
