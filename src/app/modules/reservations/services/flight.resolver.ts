import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';

import { FlightsService } from 'src/app/shared/services/flights.service';

@Injectable({
  providedIn: 'root'
})
export class FlightResolver implements Resolve<boolean> {
  constructor(private flightService: FlightsService) { }


  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.flightService.getFlightById(route.params['id']);
  }
}
