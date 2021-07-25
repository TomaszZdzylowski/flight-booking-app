import { BreakpointObserver } from '@angular/cdk/layout';
import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit {
  @Input() public cols: Array<any> = [];
  @Input() public items: Array<any> = [];
  @Input() public theadVisible: boolean = true;

  @Output() public newButtonEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit(): void { }

  public actionOnButtonClick(item: any): void {
    this.newButtonEvent.emit(item);
  }

  public get isMobile(): boolean {
    return this.breakpointObserver.isMatched('(max-width: 768px)');
  }
}
