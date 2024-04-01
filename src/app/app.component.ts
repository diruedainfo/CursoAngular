import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Astro Booking';
  public subtitle = 'Welcome on board';
  public author = 'Diego Rueda';
  public authorUrl = 'http://www.google.es';
  public agencies = [
    {
      id: 'space-y',
      name: 'Space Y',
      range: 'Interplanetary',
      status: 'Active',
    },
    {
      id: 'green-origin',
      name: 'Green Origin',
      range: 'Orbital',
      status: 'Active',
    },
    {
      id: 'virgin-way',
      name: 'Virgin Way',
      range: 'Orbital',
      status: 'Pending',
    },
  ]
  public reloading = false;
  public getAgenciesLength() {
    return this.agencies.length;
  }

  public reload(list:string) {
    this.reloading = true;
    console.log('Reloading...' + list);
  }
}
