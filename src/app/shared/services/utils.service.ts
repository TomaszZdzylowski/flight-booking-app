import { Injectable } from '@angular/core';
import * as dayjs from 'dayjs'
import { Flight } from '../models/flight';
import { FlightFilters } from '../models/flight-filters';


@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  // public filterList<Type>(array: Array<Type>, filters: any): Array<Type> {
  //   if (!filters) return array;

  //   return array.filter((item: any) =>
  //     Object.keys(filters).every((filter: string) => {

  //       if (typeof item[filter] === 'object') {
  //         return this.filterByDate(filters[filter], item[filter])
  //       } else {
  //         return this.isStringEqual(filters[filter], item[filter])
  //       }
  //     })
  //   );
  // }

  public isStringEqual(itemA: string = '', itemB: string = ''): boolean {
    return itemA.toLowerCase() === itemB.toLowerCase();
  }

  public filterByDate(dateA: string, dateB: string): boolean {
    return dayjs(dateA).isAfter(dateB);
  }

  public filter(array: Array<Flight>, filters: FlightFilters | undefined) {
    if (!filters) return array;

    return array.filter(value => {
      if (filters.returnDepartureDate === null) {
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
