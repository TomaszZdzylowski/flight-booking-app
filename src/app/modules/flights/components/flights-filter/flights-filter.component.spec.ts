import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsFilterComponent } from './flights-filter.component';

describe('FlightsFilterComponent', () => {
  let component: FlightsFilterComponent;
  let fixture: ComponentFixture<FlightsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightsFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
