import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoGestionComponent } from './alumno-gestion.component';

describe('AlumnoGestionComponent', () => {
  let component: AlumnoGestionComponent;
  let fixture: ComponentFixture<AlumnoGestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoGestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
