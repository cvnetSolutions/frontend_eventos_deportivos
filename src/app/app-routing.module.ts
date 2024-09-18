import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventoListComponent } from './eventos/evento-list/evento-list.component';
import { EventoDetailComponent } from './eventos/evento-detail/evento-detail.component';
import { InscripcionListComponent } from './inscripciones/inscripcion-list/inscripcion-list.component';
import { InscripcionDetailComponent } from './inscripciones/inscripcion-detail/inscripcion-detail.component';
import { ParticipanteListComponent } from './participantes/participante-list/participante-list.component';
import { ParticipanteDetailComponent } from './participantes/participante-detail/participante-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/eventos', pathMatch: 'full' },  // Redirige a la lista de eventos
  { path: 'eventos', component: EventoListComponent },
  { path: 'eventos/nuevo', component: EventoDetailComponent },  // Ruta para crear nuevo evento
  { path: 'eventos/:id', component: EventoDetailComponent },    // Ruta para editar un evento
  
  { path: 'inscripciones', component: InscripcionListComponent },
  { path: 'inscripciones/nueva', component: InscripcionDetailComponent },  // Ruta para crear nueva inscripción
  { path: 'inscripciones/:id', component: InscripcionDetailComponent },    // Ruta para editar una inscripción
  
  { path: 'participantes', component: ParticipanteListComponent },
  { path: 'participantes/nuevo', component: ParticipanteDetailComponent },  // Ruta para crear nuevo participante
  { path: 'participantes/:id', component: ParticipanteDetailComponent },    // Ruta para editar un participante
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
