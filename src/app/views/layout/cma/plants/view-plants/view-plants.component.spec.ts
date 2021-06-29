import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewplantsComponent } from './view-plants.component';

describe('ViewplantsComponent', () => {
  let component: ViewplantsComponent;
  let fixture: ComponentFixture<ViewplantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewplantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewplantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
