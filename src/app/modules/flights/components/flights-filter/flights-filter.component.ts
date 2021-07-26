import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';

import { FlightsService } from '../../../../shared/services/flights.service';
import { UtilsService } from '../../../../shared/services/utils.service';

import { City } from '../../../../shared/models/city';
import { Flight, FlightFilters } from '../../../../shared/models/flight';


@Component({
  selector: 'app-flights-filter',
  templateUrl: './flights-filter.component.html',
  styleUrls: ['./flights-filter.component.scss', '../../../../../common-styles/shared.scss']
})
export class FlightsFilterComponent implements OnInit {
  @Input() public cities: Array<City> = [];

  public selectedCity: City | undefined;
  public flightsFormGroup: FormGroup = this.fb.group({});

  constructor(
    private fb: FormBuilder,
    private breakpointObserver: BreakpointObserver,
    private flightsService: FlightsService,
    private utilsService: UtilsService
  ) { }

  ngOnInit(): void {
    this.initFlightsFormGroup();
  }

  private initFlightsFormGroup(): void {
    const currentDate: Date = new Date();

    this.flightsFormGroup = this.fb.group({
      cityFrom: [this.cities[0]],
      cityTo: [this.cities[1]],
      departureDate: [currentDate],
      returnDepartureDate: []
    });
  }

  public filterList(): void {
    const filters: FlightFilters = {
      cityFrom: this.cityFrom?.value?.name,
      cityTo: this.cityTo?.value?.name,
      departureDate: this.departureDate?.value,
      returnDepartureDate: this.returnDepartureDate?.value
    }

    this.getFilteredFlights(filters);
  }

  private getFilteredFlights(filters: FlightFilters): void {
    this.flightsService.getFlights(filters)
      .subscribe((flights: Array<Flight>) => {
        this.flightsService.flights.next(flights);
      });
  }

  public get isMobile(): boolean {
    return this.breakpointObserver.isMatched('(max-width: 768px)');
  }

  public get citiesEqual(): boolean {
    return this.cityFrom?.value?.name === this.cityTo?.value?.name;
  }

  public get isDepartureDateGreater(): boolean {
    return this.utilsService.filterByDate(this.departureDate?.value, this.returnDepartureDate?.value)
  }

  public get isSearchDisabled(): boolean {
    return this.citiesEqual || this.isDepartureDateGreater;
  }

  public get cityFrom(): AbstractControl | null {
    return this.flightsFormGroup.get('cityFrom');
  }

  public get cityTo(): AbstractControl | null {
    return this.flightsFormGroup.get('cityTo');
  }

  private get departureDate(): AbstractControl | null {
    return this.flightsFormGroup.get('departureDate');
  }

  private get returnDepartureDate(): AbstractControl | null {
    return this.flightsFormGroup.get('returnDepartureDate');
  }

}
