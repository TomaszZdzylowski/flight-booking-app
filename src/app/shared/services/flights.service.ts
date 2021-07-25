import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { City } from '../models/city';
import { Flight, FlightFilters } from '../models/flight';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  private baseUrl: string = 'http://localhost:3000';

  public flight: BehaviorSubject<Flight> = new BehaviorSubject<Flight>({} as any);
  public flightState$: Observable<Flight> = this.flight.asObservable();

  public flights: BehaviorSubject<Array<Flight>> = new BehaviorSubject<Array<Flight>>([]);
  public flightsState$: Observable<Array<Flight>> = this.flights.asObservable();

  constructor(
    private http: HttpClient,
    private utilsService: UtilsService
  ) { }

  public getFlights(filters?: FlightFilters): Observable<Array<Flight>> {
    return this.http.get<Array<Flight>>(`${this.baseUrl}/flights`)
      .pipe(
        map((flights: Array<Flight>) => {
          return this.utilsService.filter(flights, filters);
        })
      )
  }

  public getCities(): Observable<Array<City>> {
    return this.http.get<Array<City>>(`${this.baseUrl}/groupedCities`);
  }
}


