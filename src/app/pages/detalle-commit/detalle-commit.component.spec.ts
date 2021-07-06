import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCommitComponent } from './detalle-commit.component';

describe('DetalleCommitComponent', () => {
  let component: DetalleCommitComponent;
  let fixture: ComponentFixture<DetalleCommitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleCommitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCommitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
