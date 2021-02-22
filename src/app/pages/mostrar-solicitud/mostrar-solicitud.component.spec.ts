import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarSolicitudComponent } from './mostrar-solicitud.component';

describe('MostrarSolicitudComponent', () => {
  let component: MostrarSolicitudComponent;
  let fixture: ComponentFixture<MostrarSolicitudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarSolicitudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
