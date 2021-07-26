import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FlightsService } from 'src/app/shared/services/flights.service';

import { Flight } from 'src/app/shared/models/flight';
import { flightTableColumns } from 'src/app/shared/mocks/flight-table.mock';
import { TableColumn } from 'src/app/shared/models/table';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  public cols: Array<TableColumn> = flightTableColumns;

  public flights$: Observable<Array<Flight>> = this.flightsService.getFlights()
    .pipe(
      map((flights: Array<Flight>) =>
        flights.map(({ cityFrom, cityTo, ...flight }) => ({
          ...flight,
          cityFrom: `${cityFrom.slice(0, 3).toUpperCase()}`,
          cityTo: `${cityTo.slice(0, 3).toUpperCase()}`
        })
        )
      ));


  constructor(
    private flightsService: FlightsService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  public navigate(flight: Flight): void {
    this.router.navigate([`reservation/${flight.id}`]);;
  }
}
