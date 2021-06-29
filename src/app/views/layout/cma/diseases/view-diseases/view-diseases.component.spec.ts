import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdiseasesComponent } from './view-diseases.component';

describe('ViewdiseasesComponent', () => {
  let component: ViewdiseasesComponent;
  let fixture: ComponentFixture<ViewdiseasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdiseasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdiseasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
