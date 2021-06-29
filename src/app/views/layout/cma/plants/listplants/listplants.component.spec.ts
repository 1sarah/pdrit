import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListplantsComponent } from './listplants.component';

describe('ListplantsComponent', () => {
  let component: ListplantsComponent;
  let fixture: ComponentFixture<ListplantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListplantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListplantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
