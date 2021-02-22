import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenesOficinaComponent } from './imagenes-oficina.component';

describe('ImagenesOficinaComponent', () => {
  let component: ImagenesOficinaComponent;
  let fixture: ComponentFixture<ImagenesOficinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagenesOficinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenesOficinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
