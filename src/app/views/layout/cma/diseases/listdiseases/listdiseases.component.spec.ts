import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdiseasesComponent } from './listdiseases.component';

describe('ListdiseasesComponent', () => {
  let component: ListdiseasesComponent;
  let fixture: ComponentFixture<ListdiseasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListdiseasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdiseasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
