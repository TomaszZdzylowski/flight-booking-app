import { FlightsService } from './../../shared/services/flights.service';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {

  public cols: any[] = [];
  public items: any[] = [];

  public flights$: Observable<any> = this.flightsService.getFlights();


  constructor(
    private flightsService: FlightsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.setColumns();
  }

  private setColumns(): void {
    this.cols = [
      { field: 'cityFrom', header: 'place of departure' },
      { field: 'cityTo', header: 'place of arrival' },
      { field: 'departureDate', header: 'departure date' },
      { field: 'button' }
    ];
  }

  public navigate(event: Event): void {
    console.log(event);
  }
}
