import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { ParticipanteService } from '../../services/participante.service';
import { Participante } from '../../../../Interfaces/participante.model';

@Component({
  selector: 'app-participante-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './participante-list.component.html',
  styleUrls: ['./participante-list.component.scss']
})
export class ParticipanteListComponent implements OnInit {
  listaParticipantes: Participante[] = [];

  constructor(private participanteService: ParticipanteService) {}

  ngOnInit() {
    this.cargarParticipantes();
  }

  cargarParticipantes() {
    this.participanteService.todos().subscribe((data) => {
      this.listaParticipantes = data;
    });
  }

  eliminar(participanteId: number) {
    Swal.fire({
      title: 'Eliminar Participante',
      text: '¿Está seguro de eliminar el participante?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.participanteService.eliminar(participanteId).subscribe(() => {
          Swal.fire('Participante Eliminado', '', 'success');
          this.cargarParticipantes();
        });
      }
    });
  }
}
