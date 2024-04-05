import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {FormMessagesService} from "../../core/forms/form-messages.service";
import {FormCommonUtilitiesService} from "../../core/forms/form-common-utilities.service";
import {FormBase} from "../../core/forms/form.base";
import {IdName} from "../../core/api/id-name.interface";
import {IdNameApi} from "../../core/api/id-name.api";
import {AgenciesApi} from "../../core/api/agencies.api";
import {Agency} from "../../core/api/agency.interface";

@Component({
  selector: 'app-new-agency-form',
  templateUrl: './new-agency.form.html',
  styleUrls: ['./new-agency.form.scss']
})
export class NewAgencyForm extends FormBase implements OnInit {

  public ranges: IdName[];
  public statuses;

  constructor(
    formBuilder: FormBuilder,
    fms: FormMessagesService,
    private fcus: FormCommonUtilitiesService,
    idNameApi: IdNameApi,
    private agenciesApi: AgenciesApi,
  ) {
    super(fms);
    this.ranges = idNameApi.getRanges();
    this.statuses = idNameApi.getStatuses();
    this.form = formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      range: new FormControl('', [Validators.required]),
      status: new FormControl(this.statuses[1]),
    });
  }

  ngOnInit(): void {
  }

  onSave() {
    // desestructuración
    const {name, range, status} = this.form.value;
    const id = this.fcus.getDashId(name);
    // estructuración
    const newAgencyData: Agency = {id, name, range, status}
    console.warn('Send agency data ', newAgencyData);

    this.agenciesApi.post(newAgencyData);
  }

}
