import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrosfeedComponent } from './registrosfeed.component';

describe('RegistrosfeedComponent', () => {
  let component: RegistrosfeedComponent;
  let fixture: ComponentFixture<RegistrosfeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrosfeedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrosfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
