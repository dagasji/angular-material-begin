import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaseDetallealumnosComponent } from './clase-detallealumnos.component';

describe('ClaseDetallealumnosComponent', () => {
  let component: ClaseDetallealumnosComponent;
  let fixture: ComponentFixture<ClaseDetallealumnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaseDetallealumnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaseDetallealumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
