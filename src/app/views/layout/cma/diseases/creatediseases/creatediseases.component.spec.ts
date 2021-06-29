import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatediseasesComponent } from './creatediseases.component';

describe('CreatediseasesComponent', () => {
  let component: CreatediseasesComponent;
  let fixture: ComponentFixture<CreatediseasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatediseasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatediseasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
