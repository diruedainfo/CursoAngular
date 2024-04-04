import { Injectable } from '@angular/core';
import {AbstractControl, ValidationErrors} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class FormValidationsService {

  constructor() { }

  public passwordMatch(form: AbstractControl) : ValidationErrors | null {


    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    if(!password || !confirmPassword){
      return {
        passwordMatch:'No passwords provided',
      };
    }
    if(password.value !== confirmPassword.value){
      console.log("no son iguals");
      return {
        passwordMatch:"Passwords don't match",
      };
    }
    return null;
  }


  public datesMatch(form: AbstractControl) : ValidationErrors | null {
    const startDate = form.get('startDate');
    const endDate = form.get('endDate');
    if(!startDate || !endDate){
      return {
        datesMatch:'No dates provided',
      };
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const startDateTime = new Date(startDate.value);
    const endDateTime = new Date(endDate.value);

    if (startDateTime < today) {
      return {
        datesMatch: 'Start date cannot be in the past',
      };
    }

    if(startDateTime > endDateTime){
      return {
        datesMatch:"Start date cannot be greater than end date",
      };
    }
    return null;
  }


}
