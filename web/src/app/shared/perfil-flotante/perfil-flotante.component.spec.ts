import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilFlotanteComponent } from './perfil-flotante.component';

describe('PerfilFlotanteComponent', () => {
  let component: PerfilFlotanteComponent;
  let fixture: ComponentFixture<PerfilFlotanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilFlotanteComponent]
    });
    fixture = TestBed.createComponent(PerfilFlotanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
