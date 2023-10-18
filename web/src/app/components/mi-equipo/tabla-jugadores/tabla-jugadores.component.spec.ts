import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaJugadoresComponent } from './tabla-jugadores.component';

describe('TablaJugadoresComponent', () => {
  let component: TablaJugadoresComponent;
  let fixture: ComponentFixture<TablaJugadoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaJugadoresComponent]
    });
    fixture = TestBed.createComponent(TablaJugadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
