import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleRamaComponent } from './detalle-rama.component';

describe('DetalleRamaComponent', () => {
  let component: DetalleRamaComponent;
  let fixture: ComponentFixture<DetalleRamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleRamaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleRamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
