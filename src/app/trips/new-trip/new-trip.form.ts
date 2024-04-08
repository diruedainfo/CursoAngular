import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators} from "@angular/forms";
import {FormValidationsService} from "../../core/forms/form-validations.service";
import {FormMessagesService} from "../../core/forms/form-messages.service";
import {FormCommonUtilitiesService} from "../../core/forms/form-common-utilities.service";
import {FormBase} from "../../core/forms/form.base";
import {Agency} from "../../core/api/agency.interface";
import {AgenciesApi} from "../../core/api/agencies.api";
import {Trip} from "../../core/api/trip.interface";
import {TripsApi} from "../../core/api/trips.api";

@Component({
  selector: 'app-new-trip-form',
  templateUrl: './new-trip.form.html',
  styleUrls: ['./new-trip.form.scss']
})
export class NewTripForm extends FormBase implements OnInit {

  public agencies : Agency[];
  constructor(
    formBuilder: FormBuilder,
    fvs: FormValidationsService,
    fms: FormMessagesService,
    private fcus: FormCommonUtilitiesService,
    agenciesApi: AgenciesApi,
    private tripsApi: TripsApi
  ) {
    super(fms);
    this.agencies = agenciesApi.getAll();
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
    const id = this.fcus.getDashId(destination);

    //datos sin asignar
    const agencyTripCode = 'code1';
    const stayingNightPrice = 10000;
    const kind = 'WithStay';
    const status = 'Waiting';
    const extraLuggagePricePerKilo = 50000;
    const premiumFoodPrice = 0;

    // estructuración
    const newTripData: Trip = { id,
      agencyId,
      agencyTripCode,
      destination,
      places,
      startDate,
      endDate,
      flightPrice,
      stayingNightPrice,
      kind,
      status,
      extraLuggagePricePerKilo,
      premiumFoodPrice}

    console.warn('Send trip data ', newTripData);

    this.tripsApi.post(newTripData);
  }

  private getDashId(str: string): string {
    return str.toLocaleLowerCase().replace(/ /g, '-');
  }

}
