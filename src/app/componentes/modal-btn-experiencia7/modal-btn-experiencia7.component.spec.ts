import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBtnExperiencia7Component } from './modal-btn-experiencia7.component';

describe('ModalBtnExperiencia7Component', () => {
  let component: ModalBtnExperiencia7Component;
  let fixture: ComponentFixture<ModalBtnExperiencia7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalBtnExperiencia7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalBtnExperiencia7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
