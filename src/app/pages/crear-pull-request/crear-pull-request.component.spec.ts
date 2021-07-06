import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPullRequestComponent } from './crear-pull-request.component';

describe('CrearPullRequestComponent', () => {
  let component: CrearPullRequestComponent;
  let fixture: ComponentFixture<CrearPullRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPullRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPullRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
