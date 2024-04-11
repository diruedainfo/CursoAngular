import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBase} from "../../core/forms/form.base";
import {Trip} from "../../core/api/trip.interface";
import {Booking} from "../../core/api/booking.interface";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {FormValidationsService} from "../../core/forms/form-validations.service";
import {FormMessagesService} from "../../core/forms/form-messages.service";
import {Agency} from "../../core/api/agency.interface";
import {FormCommonUtilitiesService} from "../../core/forms/form-common-utilities.service";

@Component({
  selector: 'app-new-booking-form',
  templateUrl: './new-booking.form.html',
  styleUrls: ['./new-booking.form.scss']
})
export class NewBookingForm extends FormBase implements OnInit {

  @Input()
  public trips : Trip[] = [];
  @Input()
  public premiumFood: string[] = [];

  @Output()
  public save = new EventEmitter<Booking>();

  constructor(
    formBuilder: FormBuilder,
    fvs: FormValidationsService,
    fms: FormMessagesService,
    private fcus: FormCommonUtilitiesService,
  ) {
    super(fms);

    this.form = formBuilder.group({
      idBooking: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      tripId: new FormControl('',  [Validators.required]),
      passengerName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      date: ['', [Validators.required]],
      luggageKilos: new FormControl(999,[Validators.required, Validators.min(999), Validators.max(3000)]),
      hasPremiumFoodPrice: new FormControl(this.premiumFood[1],[Validators.required]),
    })
  }

  onSave(){
    // desestructuración
    const { tripId, passengerName, date, luggageKilos, hasPremiumFoodPrice } = this.form.value;
    const id = this.fcus.getDashId(this.form.value.idBooking);
    let luggageKilosNumber : number = +luggageKilos; // Convierte un string a un number
    /*let luggageKilosString : string = luggageKilosNumber.toString(); // Convierte a string*/

    // estructuración
    const newBookingData: Booking = {
      id: id,
      tripId: tripId,
      passengerName: passengerName,
      date: date,
      luggageKilos: luggageKilosNumber,
      hasPremiumFoodPrice: hasPremiumFoodPrice
      }

    console.warn('Send booking data ', newBookingData);

    this.save.emit(newBookingData);
  }

  ngOnInit(): void {
  }

}
