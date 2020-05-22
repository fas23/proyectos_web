import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntosInteresComponent } from './puntos-interes.component';

describe('PuntosInteresComponent', () => {
  let component: PuntosInteresComponent;
  let fixture: ComponentFixture<PuntosInteresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntosInteresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntosInteresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
