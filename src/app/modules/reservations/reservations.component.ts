import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Flight } from '../../shared/models/flight';
import { FlightsService } from '../../shared/services/flights.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {

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
      { field: 'cityFrom', header: 'departure city' },
      { field: 'cityTo', header: 'arrival city' },
      { field: 'departureDate', header: ' departure date' },
      { field: 'button' },
    ];
  }

  public navigate(flight: Flight): void {
    this.router.navigate([`reservation/${flight.id}`]);
  }
}
