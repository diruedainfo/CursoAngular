import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {FormMessagesService} from "../../core/forms/form-messages.service";
import {FormCommonUtilitiesService} from "../../core/forms/form-common-utilities.service";

@Component({
  selector: 'app-new-agency-form',
  templateUrl: './new-agency.form.html',
  styleUrls: ['./new-agency.form.scss']
})
export class NewAgencyForm implements OnInit {
  public form: FormGroup;

  public ranges = [
    { id: 'Orbital', name: '🌍 Orbiting around the earth'},
    {
      id: 'Interplanetary',
      name: '☀ To the moon and other planets'
    },
    { id: 'Interstellar', name: '⭐ Traveling to other stars'},
  ]

  public statuses = ['Active', 'Pending'];
  constructor(formBuilder: FormBuilder,
              public fms: FormMessagesService,
              public fcus: FormCommonUtilitiesService) {
    this.form = formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      range: new FormControl('', [Validators.required]),
      status: new FormControl(this.statuses[1]),
    });
  }

  public hasError(controlName: string): boolean {
    return this.fms.hasError(this.form, controlName);
  }

  public mustShowMessage(controlName: string): boolean {
    return this.fms.mustShowMessage(this.form, controlName);
  }

  public getErrorMessage(controlName: string): string {
    return this.fms.getErrorMessage(this.form, controlName);
  }

  ngOnInit(): void {
  }

  onSave(){
    // desestructuración
    const { name, range, status } = this.form.value;
    const id = this.fcus.getDashId(name);
    // estructuración
    const newAgencyData = { id, name, range, status }
    console.warn('Send agency data ', newAgencyData);
  }

}
