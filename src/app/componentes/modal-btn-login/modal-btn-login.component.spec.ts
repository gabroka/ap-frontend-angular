import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBtnLoginComponent } from './modal-btn-login.component';

describe('ModalBtnLoginComponent', () => {
  let component: ModalBtnLoginComponent;
  let fixture: ComponentFixture<ModalBtnLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalBtnLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalBtnLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
