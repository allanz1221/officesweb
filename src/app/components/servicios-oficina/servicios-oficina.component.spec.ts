import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosOficinaComponent } from './servicios-oficina.component';

describe('ServiciosOficinaComponent', () => {
  let component: ServiciosOficinaComponent;
  let fixture: ComponentFixture<ServiciosOficinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciosOficinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosOficinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
