import { SharedModule } from './../../shared/shared.module';
import { FlightsComponent } from './flights.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsFilterComponent } from './components/flights-filter/flights-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    FlightsComponent,
    FlightsFilterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    DropdownModule,
    ButtonModule

  ]
})
export class FlightsModule { }
