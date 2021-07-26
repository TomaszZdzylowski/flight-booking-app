import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { FlightsService } from './../../shared/services/flights.service';

import { Flight } from 'src/app/shared/models/flight';
import { City } from 'src/app/shared/models/city';
import { TableColumn } from 'src/app/shared/models/table';
import { flightTableColumns } from 'src/app/shared/mocks/flight-table.mock';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {
  public cols: Array<TableColumn> = flightTableColumns;

  public cities$: Observable<Array<City>> = this.flightsService.getCities();
  public flights$: Observable<Array<Flight>> = this.flightsService.flightsState$
    .pipe(
      map((flights: Array<Flight>) =>
        flights.map(({ cityFrom, cityTo, ...flight }) => ({
          ...flight,
          cityFrom: `${cityFrom} (${cityFrom.slice(0, 3).toUpperCase()})`,
          cityTo: `${cityTo} (${cityTo.slice(0, 3).toUpperCase()})`
        })
        )
      ));

  constructor(
    private flightsService: FlightsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getFlights();
  }

  private getFlights(): void {
    this.flightsService.getFlights()
      .subscribe((flights: Array<Flight>) => {
        this.flightsService.flights.next(flights);
      });
  }

  public navigate(flight: Flight): void {
    this.router.navigate([`reservation/${flight.id}`])
  }
}
