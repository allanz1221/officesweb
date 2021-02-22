import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarReservaComponent } from './mostrar-reserva.component';

describe('MostrarReservaComponent', () => {
  let component: MostrarReservaComponent;
  let fixture: ComponentFixture<MostrarReservaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarReservaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
