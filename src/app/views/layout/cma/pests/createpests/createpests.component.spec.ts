import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepestsComponent } from './createpests.component';

describe('CreatepestsComponent', () => {
  let component: CreatepestsComponent;
  let fixture: ComponentFixture<CreatepestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatepestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatepestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
