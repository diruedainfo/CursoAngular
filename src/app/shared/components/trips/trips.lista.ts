import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trips-lista',
  templateUrl: './trips.lista.html',
  styleUrls: ['./trips.lista.scss']
})
export class TripsLista implements OnInit {
  public reloading = false;

  trips = [
    {
      id: 'space-y-moon-1',
      agencyId: 'space-y',
      agencyTripCode: 'moon',
      destination: 'The Moon',
      places: 14,
      startDate: '2023-01-01',
      endDate: '2023-02-01',
      flightPrice: 1200000,
      stayingNightPrice: 10000,
      kind: 'WithStay',
      status: 'Confirmed',
      extraLuggagePricePerKilo: 2000,
      premiumFoodPrice: 0,
    },
    {
      id: 'space-y-moon-2',
      agencyId: 'space-y',
      agencyTripCode: 'mars',
      destination: 'Mars',
      places: 8,
      startDate: '2024-01-01',
      endDate: '2024-05-01',
      flightPrice: 8400000,
      stayingNightPrice: 10000,
      kind: 'WithStay',
      status: 'Waiting',
      extraLuggagePricePerKilo: 50000,
      premiumFoodPrice: 0,
    },
    {
      id: 'green-origin-low-orbit-3',
      agencyId: 'green-origin',
      agencyTripCode: 'low-orbit',
      destination: 'Low Orbit',
      places: 0,
      startDate: '2022-04-01',
      endDate: '2022-04-01',
      flightPrice: 320000,
      stayingNightPrice: 0,
      kind: 'TripOnly',
      status: 'Waiting',
      extraLuggagePricePerKilo: 0,
      premiumFoodPrice: 1000,
    },
    {
      id: 'green-origin-low-orbit-4',
      agencyId: 'green-origin',
      agencyTripCode: 'high-orbit',
      destination: 'High Orbit',
      places: 0,
      startDate: '2023-04-01',
      endDate: '2023-04-01',
      flightPrice: 420000,
      stayingNightPrice: 1,
      kind: 'TripOnly',
      status: 'Waiting',
      extraLuggagePricePerKilo: 0,
      premiumFoodPrice: 2000,
    },
    {
      id: 'green-origin-low-orbit-5',
      agencyId: 'green-origin',
      agencyTripCode: 'high-orbit',
      destination: 'High Orbit',
      places: 0,
      startDate: '2023-04-01',
      endDate: '2023-04-01',
      flightPrice: 420000,
      stayingNightPrice: 1,
      kind: 'TripOnly',
      status: 'Waiting',
      extraLuggagePricePerKilo: 0,
      premiumFoodPrice: 2000,
    },
  ]

  public getTripsLength() {
    return this.trips.length;
  }

  public reload(list:string) {
    this.reloading = true;
    console.log('Reloading...' + list);
  }

  ngOnInit(): void {
  }

}