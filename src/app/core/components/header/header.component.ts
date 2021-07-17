import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  public items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.initItemsList();
  }

  private initItemsList(): void {
    this.items = [
      {
        label: 'LOTY',

      },
      {
        label: 'REZERWACJE',
      }
    ];
  }
}


