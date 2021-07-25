import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { Flight } from 'src/app/shared/models/flight';
import { FlightsService } from 'src/app/shared/services/flights.service';
import { flightTableColumns } from 'src/app/shared/mocks/flight-table.mock';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {
  public cols: any[] = flightTableColumns;
  public items: any[] = [];

  public flights$: Observable<Array<Flight>> = this.flightsService.getFlights();

  constructor(
    private flightsService: FlightsService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  private sendData(flight: Flight): void {
    this.flightsService.flight.next(flight);
  }

  public navigate(flight: Flight): void {
    this.sendData(flight);
    this.router.navigate([`reservation/${flight.id}`]);
  }
}
