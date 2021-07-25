import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

import { ReservationsComponent } from './reservations.component';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';

import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { MultiSelectModule } from 'primeng/multiselect';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';




@NgModule({
  declarations: [
    ReservationsComponent,
    ReservationFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    InputTextModule,
    InputNumberModule,
    MultiSelectModule,
    CalendarModule,
    DropdownModule
  ]
})
export class ReservationsModule { }
