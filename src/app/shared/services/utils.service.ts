import { Injectable } from '@angular/core';
import * as dayjs from 'dayjs'
import { Flight, FlightFilters } from '../models/flight';


@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  public isStringEqual(itemA: string = '', itemB: string = ''): boolean {
    return itemA.toLowerCase() === itemB.toLowerCase();
  }

  public filterByDate(dateA: string, dateB: string): boolean {
    return dayjs(dateA).isAfter(dateB);
  }

  public filter(array: Array<Flight>, filters: FlightFilters | undefined): Array<Flight> {
    if (!filters) return array;

    return array.filter((value: Flight) => {
      if (filters.returnDepartureDate === null || filters.returnDepartureDate === '') {
        return (
          this.isStringEqual(value.cityFrom, filters.cityFrom) &&
          this.isStringEqual(value.cityTo, filters.cityTo) &&
          this.filterByDate(value.departureDate, filters.departureDate)
        );
      } else {
        return (
          this.isStringEqual(value.cityFrom, filters.cityFrom) &&
          this.isStringEqual(value.cityTo, filters.cityTo) &&
          this.filterByDate(value.departureDate, filters.departureDate) &&
          this.filterByDate(value.departureDate, filters.returnDepartureDate)
        );
      }
    });
  }
}
