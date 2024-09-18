import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { Inscripcion } from '../../../../Interfaces/inscripcion.model';
import { InscripcionService } from '../../services/inscripcion.service';

@Component({
  selector: 'app-inscripcion-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './inscripcion-list.component.html',
  styleUrls: ['./inscripcion-list.component.scss']
})
export class InscripcionListComponent implements OnInit {
  listaInscripciones: Inscripcion[] = [];

  constructor(private inscripcionService: InscripcionService) {}

  ngOnInit() {
    this.cargarInscripciones();
  }

  cargarInscripciones() {
    this.inscripcionService.todos().subscribe((data) => {
      this.listaInscripciones = data;
    });
  }

  eliminar(inscripcionId: number) {
    Swal.fire({
      title: 'Eliminar Inscripción',
      text: '¿Está seguro de eliminar la inscripción?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.inscripcionService.eliminar(inscripcionId).subscribe(() => {
          Swal.fire('Inscripción Eliminada', 'La inscripción ha sido eliminada correctamente.', 'success');
          this.cargarInscripciones();
        });
      }
    });
  }
}
