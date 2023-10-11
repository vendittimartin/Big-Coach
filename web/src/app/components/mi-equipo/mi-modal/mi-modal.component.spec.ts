import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiModalComponent } from './mi-modal.component';

describe('MiModalComponent', () => {
  let component: MiModalComponent;
  let fixture: ComponentFixture<MiModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiModalComponent]
    });
    fixture = TestBed.createComponent(MiModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
