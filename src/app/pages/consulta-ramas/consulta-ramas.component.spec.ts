import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaRamasComponent } from './consulta-ramas.component';

describe('SeleccionarRepositorioComponent', () => {
  let component: ConsultaRamasComponent;
  let fixture: ComponentFixture<ConsultaRamasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaRamasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaRamasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
