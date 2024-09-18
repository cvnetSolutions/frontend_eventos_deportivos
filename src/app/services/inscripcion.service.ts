import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inscripcion } from '../../../Interfaces/inscripcion.model';

@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {
  apiurl = 'http://localhost/Sistema_Eventos_Deportivos/controllers/inscripciones.controller.php?op=';
  constructor(private lector: HttpClient) {}

  buscar(texto: string): Observable<Inscripcion> {
    const formData = new FormData();
    formData.append('texto', texto);
    return this.lector.post<Inscripcion>(this.apiurl + 'uno', formData);
  }

  todos(): Observable<Inscripcion[]> {
    return this.lector.get<Inscripcion[]>(this.apiurl + 'todos');
  }
  
  uno(idInscripcion: number): Observable<Inscripcion> {
    const formData = new FormData();
    formData.append('idInscripcion', idInscripcion.toString());
    return this.lector.post<Inscripcion>(this.apiurl + 'uno', formData);
  }
  
  eliminar(idInscripcion: number): Observable<number> {
    const formData = new FormData();
    formData.append('idInscripcion', idInscripcion.toString());
    return this.lector.post<number>(this.apiurl + 'eliminar', formData);
  }
  
  insertar(inscripcion: Inscripcion): Observable<string> {
    const formData = new FormData();
    formData.append('evento_id', inscripcion.evento_id.toString());
    formData.append('participante_id', inscripcion.participante_id.toString());
    formData.append('fecha', inscripcion.fecha_inscripcion);
    return this.lector.post<string>(this.apiurl + 'insertar', formData);
  }
  
  actualizar(inscripcion: Inscripcion): Observable<string> {
    const formData = new FormData();
    formData.append('idInscripcion', inscripcion.inscripcion_id.toString());
    formData.append('evento_id', inscripcion.evento_id.toString());
    formData.append('participante_id', inscripcion.participante_id.toString());
    formData.append('fecha', inscripcion.fecha_inscripcion);
    return this.lector.post<string>(this.apiurl + 'actualizar', formData);
  }
}
