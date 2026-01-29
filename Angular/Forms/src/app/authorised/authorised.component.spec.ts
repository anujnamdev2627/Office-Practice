import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorisedComponent } from './authorised.component';

describe('AuthorisedComponent', () => {
  let component: AuthorisedComponent;
  let fixture: ComponentFixture<AuthorisedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorisedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorisedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
