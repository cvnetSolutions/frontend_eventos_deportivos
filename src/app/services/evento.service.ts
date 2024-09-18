import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from '../../../Interfaces/evento.model';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  apiurl = 'http://localhost/Sistema_Eventos_Deportivos/controllers/eventos.controller.php?op=';
  constructor(private lector: HttpClient) {}

  buscar(texto: string): Observable<Evento> {
    const formData = new FormData();
    formData.append('texto', texto);
    return this.lector.post<Evento>(this.apiurl + 'uno', formData);
  }

  todos(): Observable<Evento[]> {
    return this.lector.get<Evento[]>(this.apiurl + 'todos');
  }
  
  uno(idEvento: number): Observable<Evento> {
    const formData = new FormData();
    formData.append('idEvento', idEvento.toString());
    return this.lector.post<Evento>(this.apiurl + 'uno', formData);
  }
  
  eliminar(idEvento: number): Observable<number> {
    const formData = new FormData();
    formData.append('idEvento', idEvento.toString());
    return this.lector.post<number>(this.apiurl + 'eliminar', formData);
  }
  
  insertar(evento: Evento): Observable<string> {
    const formData = new FormData();
    formData.append('nombre', evento.nombre);
    formData.append('fecha', evento.fecha);
    formData.append('ubicacion', evento.ubicacion);
    formData.append('descripcion', evento.descripcion);
    return this.lector.post<string>(this.apiurl + 'insertar', formData);
  }
  
  actualizar(evento: Evento): Observable<string> {
    const formData = new FormData();
    formData.append('idEvento', evento.evento_id.toString());
    formData.append('nombre', evento.nombre);
    formData.append('fecha', evento.fecha);
    formData.append('ubicacion', evento.ubicacion);
    formData.append('descripcion', evento.descripcion);
    return this.lector.post<string>(this.apiurl + 'actualizar', formData);
  }
}
