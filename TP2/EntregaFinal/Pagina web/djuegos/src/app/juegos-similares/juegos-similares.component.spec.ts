import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegosSimilaresComponent } from './juegos-similares.component';

describe('JuegosSimilaresComponent', () => {
  let component: JuegosSimilaresComponent;
  let fixture: ComponentFixture<JuegosSimilaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegosSimilaresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegosSimilaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
