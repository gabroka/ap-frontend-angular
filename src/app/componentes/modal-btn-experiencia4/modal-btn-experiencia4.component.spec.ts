import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBtnExperiencia4Component } from './modal-btn-experiencia4.component';

describe('ModalBtnExperiencia4Component', () => {
  let component: ModalBtnExperiencia4Component;
  let fixture: ComponentFixture<ModalBtnExperiencia4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalBtnExperiencia4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalBtnExperiencia4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
