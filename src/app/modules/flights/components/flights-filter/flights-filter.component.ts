import { City } from './../../../../shared/models/City';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';


@Component({
  selector: 'app-flights-filter',
  templateUrl: './flights-filter.component.html',
  styleUrls: ['./flights-filter.component.scss']
})
export class FlightsFilterComponent implements OnInit {
  public cities: City[] = [];
  public selectedCity: City = {} as City;

  flightsFormGroup: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder, private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.initCitiesList();
    this.initFlightsFormGroup();
  }

  private initCitiesList(): void {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }

  private initFlightsFormGroup(): void {
    const currentDate: Date = new Date();

    this.flightsFormGroup = this.fb.group({
      cityFrom: [''],
      cityTo: [''],
      departureDate: [currentDate],
      dateOfReturnDeparture: [currentDate]
    });
  }

  public get isMobile(): boolean {
    return this.breakpointObserver.isMatched('(max-width: 768px)');
  }
}
