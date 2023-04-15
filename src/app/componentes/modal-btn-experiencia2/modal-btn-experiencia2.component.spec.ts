import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBtnExperiencia2Component } from './modal-btn-experiencia2.component';

describe('ModalBtnExperiencia2Component', () => {
  let component: ModalBtnExperiencia2Component;
  let fixture: ComponentFixture<ModalBtnExperiencia2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalBtnExperiencia2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalBtnExperiencia2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
