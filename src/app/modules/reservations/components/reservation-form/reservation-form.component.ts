import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Subscription } from 'rxjs';
import { FlightClasses } from 'src/app/shared/enums/flight-classes';
import { City } from 'src/app/shared/models/City';

import { Flight } from 'src/app/shared/models/Flight';
import { FlightsService } from 'src/app/shared/services/flights.service';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss', '../../../../../common-styles/shared.scss']
})
export class ReservationFormComponent implements OnInit, OnDestroy {
  public subscription: Subscription = new Subscription()
  public reservationForm: FormGroup = this.fb.group({});

  public flightClasses: Array<any> = [
    { name: FlightClasses.Business },
    { name: FlightClasses.Economic },
    { name: FlightClasses.EconomicalPremium },
    { name: FlightClasses.FirstClass }
  ]

  public choosenCityFrom: Array<City> = [];
  public choosenCityTo: Array<City> = [];

  constructor(
    private flightsService: FlightsService,
    private fb: FormBuilder
  ) { }


  ngOnInit(): void {
    this.initFormGroup();
    this.getFlight();
  }


  private initFormGroup(): void {
    this.reservationForm = this.fb.group({
      firstName: ['', [
        Validators.required
      ]],
      lastName: ['', [
        Validators.required
      ]],
      numberOfPeople: ['', [
        Validators.required
      ]],
      class: [''],
      cityFrom: [
        { value: '', disabled: true }
      ],
      cityTo: [
        { value: '', disabled: true }
      ],
      departureDate: [
        { value: '', disabled: true }
      ],
      returnDepartureDate: [
        { value: '', disabled: true }
      ]
    });
  }

  private getFlight(): void {
    this.subscription.add(this.flightsService.flightState$
      .subscribe((flight: Flight) => {
        this.setControlValues(flight);
      }));
  }

  private setControlValues({ cityFrom = '', cityTo = '', departureDate = '', returnDepartureDate = '' }: Flight): void {
    this.choosenCityFrom.push({ name: cityFrom });
    this.choosenCityTo.push({ name: cityTo });

    this.reservationForm.setValue({
      firstName: '',
      lastName: '',
      numberOfPeople: 1,
      class: this.flightClasses,
      cityFrom,
      cityTo,
      departureDate: new Date(departureDate),
      returnDepartureDate: new Date(returnDepartureDate),
    });
  }

  public AddToBasket(): void {

  }

  public get firstName(): AbstractControl | null {
    return this.reservationForm.get('firstName');
  }

  public get lastName(): AbstractControl | null {
    return this.reservationForm.get('lastName');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
