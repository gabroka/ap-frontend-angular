import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBtnExperiencia1Component } from './modal-btn-experiencia1.component';

describe('ModalBtnExperiencia1Component', () => {
  let component: ModalBtnExperiencia1Component;
  let fixture: ComponentFixture<ModalBtnExperiencia1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalBtnExperiencia1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalBtnExperiencia1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
