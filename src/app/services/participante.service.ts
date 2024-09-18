import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Participante } from '../../../Interfaces/participante.model';

@Injectable({
  providedIn: 'root'
})
export class ParticipantesService {
  apiurl = 'http://localhost/Sistema_Eventos_Deportivos/controllers/participantes.controller.php?op=';
  constructor(private lector: HttpClient) {}

  buscar(texto: string): Observable<Participante> {
    const formData = new FormData();
    formData.append('texto', texto);
    return this.lector.post<Participante>(this.apiurl + 'uno', formData);
  }

  todos(): Observable<Participante[]> {
    return this.lector.get<Participante[]>(this.apiurl + 'todos');
  }
  
  uno(idParticipante: number): Observable<Participante> {
    const formData = new FormData();
    formData.append('idParticipante', idParticipante.toString());
    return this.lector.post<Participante>(this.apiurl + 'uno', formData);
  }
  
  eliminar(idParticipante: number): Observable<number> {
    const formData = new FormData();
    formData.append('idParticipante', idParticipante.toString());
    return this.lector.post<number>(this.apiurl + 'eliminar', formData);
  }
  
  insertar(participante: Participante): Observable<string> {
    const formData = new FormData();
    formData.append('nombre', participante.nombre);
    formData.append('apellido', participante.apellido);
    formData.append('email', participante.email);
    formData.append('telefono', participante.telefono);
    return this.lector.post<string>(this.apiurl + 'insertar', formData);
  }
  
  actualizar(participante: Participante): Observable<string> {
    const formData = new FormData();
    formData.append('idParticipante', participante.participante_id.toString());
    formData.append('nombre', participante.nombre);
    formData.append('apellido', participante.apellido);
    formData.append('email', participante.email);
    formData.append('telefono', participante.telefono);
    return this.lector.post<string>(this.apiurl + 'actualizar', formData);
  }
}
