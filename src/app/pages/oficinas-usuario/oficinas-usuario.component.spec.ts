import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OficinasUsuarioComponent } from './oficinas-usuario.component';

describe('OficinasUsuarioComponent', () => {
  let component: OficinasUsuarioComponent;
  let fixture: ComponentFixture<OficinasUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OficinasUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OficinasUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
