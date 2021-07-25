import { FlightsService } from './../../shared/services/flights.service';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Flight } from 'src/app/shared/models/flight';
import { flightTableColumns } from './mocks/flight-table.mock';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {
  public cols: any[] = flightTableColumns;
  public items: any[] = [];

  public cities$: Observable<any> = this.flightsService.getCities();
  public flights$: Observable<any> = this.flightsService.flightsState$;


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
    this.sendData(flight);
    this.router.navigate([`reservation/${flight.id}`])
  }

  private sendData(flight: Flight): void {
    this.flightsService.flight.next(flight);
  }
}
