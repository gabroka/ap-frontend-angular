import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBtnExperiencia6Component } from './modal-btn-experiencia6.component';

describe('ModalBtnExperiencia6Component', () => {
  let component: ModalBtnExperiencia6Component;
  let fixture: ComponentFixture<ModalBtnExperiencia6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalBtnExperiencia6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalBtnExperiencia6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
