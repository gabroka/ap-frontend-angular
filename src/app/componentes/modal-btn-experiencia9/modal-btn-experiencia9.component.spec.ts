import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBtnExperiencia9Component } from './modal-btn-experiencia9.component';

describe('ModalBtnExperiencia9Component', () => {
  let component: ModalBtnExperiencia9Component;
  let fixture: ComponentFixture<ModalBtnExperiencia9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalBtnExperiencia9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalBtnExperiencia9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
