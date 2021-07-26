import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FlightsComponent } from './modules/flights/flights.component';
import { ReservationsComponent } from './modules/reservations/reservations.component';
import { FlightResolver } from './modules/reservations/services/flight.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/flights',
    pathMatch: 'full'
  },
  {
    path: 'flights',
    component: FlightsComponent
  },
  {
    path: 'reservation/:id',
    component: ReservationsComponent,
    resolve: { flight: FlightResolver }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
