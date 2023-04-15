import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBtnExperiencia10Component } from './modal-btn-experiencia10.component';

describe('ModalBtnExperiencia10Component', () => {
  let component: ModalBtnExperiencia10Component;
  let fixture: ComponentFixture<ModalBtnExperiencia10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalBtnExperiencia10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalBtnExperiencia10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
