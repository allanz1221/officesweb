import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OficinaSolicitudesComponent } from './oficina-solicitudes.component';

describe('OficinaSolicitudesComponent', () => {
  let component: OficinaSolicitudesComponent;
  let fixture: ComponentFixture<OficinaSolicitudesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OficinaSolicitudesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OficinaSolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
