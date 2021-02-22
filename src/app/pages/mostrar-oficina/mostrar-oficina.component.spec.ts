import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarOficinaComponent } from './mostrar-oficina.component';

describe('MostrarOficinaComponent', () => {
  let component: MostrarOficinaComponent;
  let fixture: ComponentFixture<MostrarOficinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarOficinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarOficinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
