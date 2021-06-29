import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpestsComponent } from './listpests.component';

describe('ListpestsComponent', () => {
  let component: ListpestsComponent;
  let fixture: ComponentFixture<ListpestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListpestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
