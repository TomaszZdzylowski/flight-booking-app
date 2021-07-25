import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IndexDbService {
  public itemsCount: BehaviorSubject<string> = new BehaviorSubject<string>('0');
  public itemsCountState$: Observable<string> = this.itemsCount.asObservable();

  constructor(private dbService: NgxIndexedDBService) { }

  public addItem(collectionName: string, data: any): Observable<any> {
    return this.dbService.add(collectionName, data);
  }

  public getItemByKey(collectionName: string, key: number): Observable<any> {
    return this.dbService.getByKey(collectionName, key);
  }

  public getAllItems(collectionName: string): Observable<any> {
    return this.dbService.getAll(collectionName);
  }

  public getAllItemsCount(collectionName: string): Observable<number> {
    return this.dbService.count(collectionName)
      .pipe(
        tap((count: number) => {
          this.itemsCount.next(count.toString());
        })
      )
  }
}
