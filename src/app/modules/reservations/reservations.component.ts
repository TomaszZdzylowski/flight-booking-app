import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FlightsService } from 'src/app/shared/services/flights.service';

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
  ) { }

  ngOnInit(): void {
    this.setColumns();
  }

  private setColumns(): void {
    this.cols = [
      { field: 'cityFrom', header: 'place of departure' },
      { field: 'cityTo', header: 'place of arrival' },
      { field: 'departureDate', header: 'departure date' },
      { field: 'button' },
    ];
  }
}
