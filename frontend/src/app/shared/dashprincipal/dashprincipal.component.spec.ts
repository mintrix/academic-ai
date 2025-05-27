import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashprincipalComponent } from './dashprincipal.component';

describe('DashprincipalComponent', () => {
  let component: DashprincipalComponent;
  let fixture: ComponentFixture<DashprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashprincipalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
