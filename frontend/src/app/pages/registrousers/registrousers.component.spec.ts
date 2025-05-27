import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrousersComponent } from './registrousers.component';

describe('RegistrousersComponent', () => {
  let component: RegistrousersComponent;
  let fixture: ComponentFixture<RegistrousersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrousersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrousersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
