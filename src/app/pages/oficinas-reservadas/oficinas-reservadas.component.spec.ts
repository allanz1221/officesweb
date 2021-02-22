import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OficinasReservadasComponent } from './oficinas-reservadas.component';

describe('OficinasReservadasComponent', () => {
  let component: OficinasReservadasComponent;
  let fixture: ComponentFixture<OficinasReservadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OficinasReservadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OficinasReservadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
