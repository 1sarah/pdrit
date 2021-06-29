import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateplantsComponent } from './createplants.component';

describe('CreateplantsComponent', () => {
  let component: CreateplantsComponent;
  let fixture: ComponentFixture<CreateplantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateplantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateplantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
