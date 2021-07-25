import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';

import { IndexDbService } from 'src/app/shared/services/index-db.service';
import { menu } from '../../mocks/menu.mock';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public items: MenuItem[] = menu;
  public count$: Observable<string> = this.indexDBService.itemsCountState$;

  constructor(
    private indexDBService: IndexDbService
  ) { }


  ngOnInit(): void {
    this.getAddedItemsCount();
  }

  private getAddedItemsCount(): void {
    this.indexDBService.getAllItemsCount('basketList')
      .subscribe();
  }
}


