import { FlightsComponent } from './modules/flights/flights.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationsComponent } from './modules/reservations/reservations.component';

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
    path: 'reservation',
    component: ReservationsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
