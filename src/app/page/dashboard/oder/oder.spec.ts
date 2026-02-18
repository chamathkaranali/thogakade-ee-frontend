import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oder } from './oder';

describe('Oder', () => {
  let component: Oder;
  let fixture: ComponentFixture<Oder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Oder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oder);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
