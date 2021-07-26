import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Data, Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { City } from 'src/app/shared/models/city';
import { Flight, FlightReservation } from 'src/app/shared/models/flight';
import { flightClasses } from 'src/app/modules/reservations/mocks/flight-classes.mock';

import { IndexDbService } from 'src/app/shared/services/index-db.service';


@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss', '../../../../../common-styles/shared.scss']
})
export class ReservationFormComponent implements OnInit, OnDestroy {
  public subscription: Subscription = new Subscription();
  public reservationForm: FormGroup = this.fb.group({});

  public flightClasses: Array<any> = flightClasses;
  public choosenCityFrom: Array<City> = [];
  public choosenCityTo: Array<City> = [];

  constructor(
    private fb: FormBuilder,
    private indexDBService: IndexDbService,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.initFormGroup();
    this.getFlight();
  }

  private getFlight(): void {
    this.route.data.subscribe((data: Data) => {
      this.setControlValues(data.flight);
    });
  }

  private initFormGroup(): void {
    const ONE = 1;

    this.reservationForm = this.fb.group({
      firstName: ['', [
        Validators.required
      ]],
      lastName: ['', [
        Validators.required
      ]],
      numberOfPeople: [ONE],
      flightClass: [this.flightClasses[0].name],
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

  private setControlValues({ cityFrom = '', cityTo = '', departureDate, returnDepartureDate }: Flight): void {
    this.choosenCityFrom = [{ name: cityFrom }];
    this.choosenCityTo = [{ name: cityTo }];

    this.reservationForm.patchValue({
      cityFrom,
      cityTo,
      departureDate: new Date(departureDate),
      returnDepartureDate: new Date(returnDepartureDate),
    });
  }

  public AddToBasket(): void {
    const reservationData: FlightReservation = this.reservationForm.getRawValue();

    this.indexDBService.addItem('basketList', reservationData)
      .pipe(
        switchMap(() => {
          return this.indexDBService.getAllItemsCount('basketList');
        })
      )
      .subscribe(() => {
        this.reservationForm.reset();
        this.router.navigate(['/flights']);
      });
  }

  public get firstName(): AbstractControl | null {
    return this.reservationForm.get('firstName');
  }

  public get lastName(): AbstractControl | null {
    return this.reservationForm.get('lastName');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
