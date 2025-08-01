import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMessages } from './add-messages';

describe('AddMessages', () => {
  let component: AddMessages;
  let fixture: ComponentFixture<AddMessages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMessages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMessages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
