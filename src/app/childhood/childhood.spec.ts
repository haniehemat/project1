import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Childhood } from './childhood';

describe('Childhood', () => {
  let component: Childhood;
  let fixture: ComponentFixture<Childhood>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Childhood]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Childhood);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
