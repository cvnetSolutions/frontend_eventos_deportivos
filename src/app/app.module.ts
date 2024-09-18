import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Routing Module
import { AppRoutingModule } from './app-routing.module';

// Componentes principales
import { AppComponent } from './app.component';
import { EventoListComponent } from './eventos/evento-list/evento-list.component';
import { EventoDetailComponent } from './eventos/evento-detail/evento-detail.component';
import { InscripcionListComponent } from './inscripciones/inscripcion-list/inscripcion-list.component';
import { InscripcionDetailComponent } from './inscripciones/inscripcion-detail/inscripcion-detail.component';
import { ParticipanteListComponent } from './participantes/participante-list/participante-list.component';
import { ParticipanteDetailComponent } from './participantes/participante-detail/participante-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    EventoListComponent,
    EventoDetailComponent,
    InscripcionListComponent,
    InscripcionDetailComponent,
    ParticipanteListComponent,
    ParticipanteDetailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,  // El módulo de rutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
