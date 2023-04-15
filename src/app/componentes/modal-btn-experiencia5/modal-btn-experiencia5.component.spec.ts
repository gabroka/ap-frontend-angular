import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBtnExperiencia5Component } from './modal-btn-experiencia5.component';

describe('ModalBtnExperiencia5Component', () => {
  let component: ModalBtnExperiencia5Component;
  let fixture: ComponentFixture<ModalBtnExperiencia5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalBtnExperiencia5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalBtnExperiencia5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
