import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioLogComponent } from './inicio-log.component';

describe('InicioLogComponent', () => {
  let component: InicioLogComponent;
  let fixture: ComponentFixture<InicioLogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioLogComponent]
    });
    fixture = TestBed.createComponent(InicioLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
