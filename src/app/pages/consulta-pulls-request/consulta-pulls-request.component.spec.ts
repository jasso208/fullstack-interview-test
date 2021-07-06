import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaPullsRequestComponent } from './consulta-pulls-request.component';

describe('ConsultaPullsRequestComponent', () => {
  let component: ConsultaPullsRequestComponent;
  let fixture: ComponentFixture<ConsultaPullsRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaPullsRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaPullsRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
