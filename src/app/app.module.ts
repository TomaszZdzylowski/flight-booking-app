import { SharedModule } from './shared/shared.module';
import { FlightsModule } from './modules/flights/flights.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReservationsModule } from './modules/reservations/reservations.module';

import { NgxIndexedDBModule } from 'ngx-indexed-db';
import { dbConfig } from './configs/index-db.config';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxIndexedDBModule.forRoot(dbConfig),
    CoreModule,
    SharedModule,
    FlightsModule,
    ReservationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
