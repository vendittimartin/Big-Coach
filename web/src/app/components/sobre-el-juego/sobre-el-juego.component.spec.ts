import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreElJuegoComponent } from './sobre-el-juego.component';

describe('SobreElJuegoComponent', () => {
  let component: SobreElJuegoComponent;
  let fixture: ComponentFixture<SobreElJuegoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SobreElJuegoComponent]
    });
    fixture = TestBed.createComponent(SobreElJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
