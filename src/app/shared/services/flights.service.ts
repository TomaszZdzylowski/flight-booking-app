import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UtilsService } from './utils.service';

import { City } from '../models/city';
import { Flight, FlightFilters } from '../models/flight';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  private baseUrl: string = 'http://localhost:3000';

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

  public getFlightById(id: number): Observable<Flight> {
    return this.http.get<Flight>(`${this.baseUrl}/flights/${id}`);
  }

  public getCities(): Observable<Array<City>> {
    return this.http.get<Array<City>>(`${this.baseUrl}/groupedCities`);
  }
}


