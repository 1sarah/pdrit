import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpestsComponent } from './view-pests.component';

describe('ViewpestsComponent', () => {
  let component: ViewpestsComponent;
  let fixture: ComponentFixture<ViewpestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
