import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.initItemsList();
  }

  private initItemsList(): void {
    this.items = [{
      label: 'Options',
      items: [
        {
          label: 'Basket',
          icon: 'pi pi-shopping-cart'
        },
        {
          label: 'User',
          icon: 'pi pi-user',
        }
      ]
    },
    {
      label: 'Navigate',
      items: [
        {
          label: 'Flights',
          icon: 'pi pi-send'
        },
        {
          label: 'Reservations',
          icon: 'pi pi-book'
        }
      ]
    }
    ];
  }
}


