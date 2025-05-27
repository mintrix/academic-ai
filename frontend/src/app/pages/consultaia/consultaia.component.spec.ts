import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaiaComponent } from './consultaia.component';

describe('ConsultaiaComponent', () => {
  let component: ConsultaiaComponent;
  let fixture: ComponentFixture<ConsultaiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
