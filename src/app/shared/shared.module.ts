import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicTableComponent } from './components/dynamic-table/dynamic-table.component';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    DynamicTableComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TableModule,
    ButtonModule
  ],
  exports: [
    DynamicTableComponent
  ]
})
export class SharedModule { }
