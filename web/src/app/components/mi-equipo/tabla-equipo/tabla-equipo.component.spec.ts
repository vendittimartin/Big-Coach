import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaEquipoComponent } from './tabla-equipo.component';

describe('TablaEquipoComponent', () => {
  let component: TablaEquipoComponent;
  let fixture: ComponentFixture<TablaEquipoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaEquipoComponent]
    });
    fixture = TestBed.createComponent(TablaEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
