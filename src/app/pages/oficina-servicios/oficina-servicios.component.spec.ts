import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OficinaServiciosComponent } from './oficina-servicios.component';

describe('OficinaServiciosComponent', () => {
  let component: OficinaServiciosComponent;
  let fixture: ComponentFixture<OficinaServiciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OficinaServiciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OficinaServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
