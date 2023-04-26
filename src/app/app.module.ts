import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './componentes/nav/nav.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AcercaDeMiComponent } from './componentes/acerca-de-mi/acerca-de-mi.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { FormacionAcademicaComponent } from './componentes/formacion-academica/formacion-academica.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { ModalBtnLoginComponent } from './componentes/modal-btn-login/modal-btn-login.component';
import { ModalBtnEditAcercaDeMiComponent } from './componentes/modal-btn-edit-acerca-de-mi/modal-btn-edit-acerca-de-mi.component';
import { ModalBtnExperiencia1Component } from './componentes/modal-btn-experiencia1/modal-btn-experiencia1.component';
import { ModalBtnExperiencia2Component } from './componentes/modal-btn-experiencia2/modal-btn-experiencia2.component';
import { ModalBtnExperiencia3Component } from './componentes/modal-btn-experiencia3/modal-btn-experiencia3.component';
import { ModalBtnExperiencia4Component } from './componentes/modal-btn-experiencia4/modal-btn-experiencia4.component';
import { ModalBtnExperiencia5Component } from './componentes/modal-btn-experiencia5/modal-btn-experiencia5.component';
import { ModalBtnExperiencia6Component } from './componentes/modal-btn-experiencia6/modal-btn-experiencia6.component';
import { ModalBtnExperiencia7Component } from './componentes/modal-btn-experiencia7/modal-btn-experiencia7.component';
import { ModalBtnExperiencia8Component } from './componentes/modal-btn-experiencia8/modal-btn-experiencia8.component';
import { ModalBtnExperiencia9Component } from './componentes/modal-btn-experiencia9/modal-btn-experiencia9.component';
import { ModalBtnExperiencia10Component } from './componentes/modal-btn-experiencia10/modal-btn-experiencia10.component';
import { LoginComponent } from './componentes/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BannerComponent,
    AcercaDeMiComponent,
    ExperienciaComponent,
    FormacionAcademicaComponent,
    SkillsComponent,
    ProyectosComponent,
    ModalBtnLoginComponent,
    ModalBtnEditAcercaDeMiComponent,
    ModalBtnExperiencia1Component,
    ModalBtnExperiencia2Component,
    ModalBtnExperiencia3Component,
    ModalBtnExperiencia4Component,
    ModalBtnExperiencia5Component,
    ModalBtnExperiencia6Component,
    ModalBtnExperiencia7Component,
    ModalBtnExperiencia8Component,
    ModalBtnExperiencia9Component,
    ModalBtnExperiencia10Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
