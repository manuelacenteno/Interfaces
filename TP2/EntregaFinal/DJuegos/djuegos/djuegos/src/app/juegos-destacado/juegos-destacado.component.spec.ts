import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegosDestacadoComponent } from './juegos-destacado.component';

describe('JuegosDestacadoComponent', () => {
  let component: JuegosDestacadoComponent;
  let fixture: ComponentFixture<JuegosDestacadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegosDestacadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegosDestacadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
