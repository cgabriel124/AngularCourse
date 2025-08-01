import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bucles } from './bucles';

describe('Bucles', () => {
  let component: Bucles;
  let fixture: ComponentFixture<Bucles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bucles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bucles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
