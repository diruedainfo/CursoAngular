import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {FormMessagesService} from "../../core/forms/form-messages.service";
import {FormCommonUtilitiesService} from "../../core/forms/form-common-utilities.service";
import {FormBase} from "../../core/forms/form.base";
import {IdName} from "../../core/api/id-name.interface";
import {Agency} from "../../core/api/agency.interface";

@Component({
  selector: 'app-new-agency-form',
  templateUrl: './new-agency.form.html',
  styleUrls: ['./new-agency.form.scss']
})
export class NewAgencyForm extends FormBase implements OnInit {

  @Input()
  public ranges: IdName[] = [];
  @Input()
  public statuses: string[] = [];

  @Output()
  public save = new EventEmitter<Agency>();

  constructor(
    formBuilder: FormBuilder,
    fms: FormMessagesService,
    private fcus: FormCommonUtilitiesService,

  ) {
    super(fms);

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

    this.save.emit(newAgencyData);
  }

}
