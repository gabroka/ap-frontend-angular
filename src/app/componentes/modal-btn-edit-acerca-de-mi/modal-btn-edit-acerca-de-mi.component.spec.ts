import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBtnEditAcercaDeMiComponent } from './modal-btn-edit-acerca-de-mi.component';

describe('ModalBtnEditAcercaDeMiComponent', () => {
  let component: ModalBtnEditAcercaDeMiComponent;
  let fixture: ComponentFixture<ModalBtnEditAcercaDeMiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalBtnEditAcercaDeMiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalBtnEditAcercaDeMiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
