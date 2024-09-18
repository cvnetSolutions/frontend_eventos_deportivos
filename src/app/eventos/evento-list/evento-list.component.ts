import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Evento } from '../../../../Interfaces/evento.model';
import { EventoService } from '../../services/evento.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-evento-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './evento-list.component.html',
  styleUrls: ['./evento-list.component.scss']
})
export class EventoListComponent implements OnInit {
  listaEventos: Evento[] = [];

  constructor(private eventoService: EventoService) {}

  ngOnInit() {
    this.cargarEventos();
  }

  cargarEventos() {
    this.eventoService.todos().subscribe((data: Evento[]) => {
      this.listaEventos = data;
    });
  }

  eliminar(eventoId: number) {
    Swal.fire({
      title: 'Eliminar Evento',
      text: '¿Está seguro de eliminar el evento?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Eliminar'
    }).then((result: { isConfirmed: any; }) => {
      if (result.isConfirmed) {
        this.eventoService.eliminar(eventoId).subscribe(() => {
          Swal.fire('Evento Eliminado', 'El evento ha sido eliminado correctamente.', 'success');
          this.cargarEventos();
        });
      }
    });
  }
}
