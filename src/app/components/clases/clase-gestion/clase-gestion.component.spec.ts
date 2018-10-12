import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaseGestionComponent } from './clase-gestion.component';

describe('GestionClaseComponent', () => {
  let component: ClaseGestionComponent;
  let fixture: ComponentFixture<ClaseGestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaseGestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaseGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
