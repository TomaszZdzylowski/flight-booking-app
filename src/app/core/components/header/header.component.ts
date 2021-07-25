import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { IndexDbService } from 'src/app/shared/services/index-db.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public items: MenuItem[] = [];
  public count$: Observable<string> = this.indexDBService.itemsCountState$;


  constructor(
    private indexDBService: IndexDbService
  ) { }


  ngOnInit(): void {
    this.initItemsList();
    this.getAddedItemsCount();
  }

  private getAddedItemsCount() {
    this.indexDBService.getAllItemsCount('basketList')
      .subscribe();
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
          label: 'Jan Kowalski',
          icon: 'pi pi-user',
        }
      ]
    },
    {
      label: 'Navigate',
      items: [
        {
          label: 'Flights',
          icon: 'pi pi-send',
          routerLink: ['/flights']
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


