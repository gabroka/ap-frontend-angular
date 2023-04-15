import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBtnExperiencia3Component } from './modal-btn-experiencia3.component';

describe('ModalBtnExperiencia3Component', () => {
  let component: ModalBtnExperiencia3Component;
  let fixture: ComponentFixture<ModalBtnExperiencia3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalBtnExperiencia3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalBtnExperiencia3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
