import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefensivosComponent } from './defensivos.component';

describe('DefensivosComponent', () => {
  let component: DefensivosComponent;
  let fixture: ComponentFixture<DefensivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefensivosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefensivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
