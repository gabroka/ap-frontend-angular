import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBtnExperiencia8Component } from './modal-btn-experiencia8.component';

describe('ModalBtnExperiencia8Component', () => {
  let component: ModalBtnExperiencia8Component;
  let fixture: ComponentFixture<ModalBtnExperiencia8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalBtnExperiencia8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalBtnExperiencia8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
