import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMessages } from './list-messages';

describe('ListMessages', () => {
  let component: ListMessages;
  let fixture: ComponentFixture<ListMessages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListMessages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMessages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
