import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactPage } from './contact.page';
import { ContactForm } from './contact.form';


@NgModule({
  declarations: [
    ContactPage,
    ContactForm,
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
