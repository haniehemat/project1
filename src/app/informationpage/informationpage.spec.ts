import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Informationpage } from './informationpage';

describe('Informationpage', () => {
  let component: Informationpage;
  let fixture: ComponentFixture<Informationpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Informationpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Informationpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
