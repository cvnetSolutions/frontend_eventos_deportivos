import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { InscripcionService } from '../../services/inscripcion.service';
import { Inscripcion } from '../../../../Interfaces/inscripcion.model';

@Component({
  selector: 'app-inscripcion-detail',
  templateUrl: './inscripcion-detail.component.html',
  styleUrls: ['./inscripcion-detail.component.scss']
})
export class InscripcionDetailComponent implements OnInit {
  inscripcionForm: FormGroup;
  inscripcionId: number = 0;
  titulo = 'Nueva Inscripción';

  constructor(
    private inscripcionService: InscripcionService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.inscripcionForm = new FormGroup({
      participanteId: new FormControl('', Validators.required),
      eventoId: new FormControl('', Validators.required),
      fechaInscripcion: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.inscripcionId = parseInt(this.route.snapshot.paramMap.get('inscripcionId')!, 10);
    if (this.inscripcionId > 0) {
      this.titulo = 'Editar Inscripción';
      this.inscripcionService.uno(this.inscripcionId).subscribe((inscripcion) => {
        this.inscripcionForm.setValue({
          participanteId: inscripcion.participante_id,
          eventoId: inscripcion.evento_id,
          fechaInscripcion: inscripcion.fecha_inscripcion
        });
      });
    }
  }

  guardarInscripcion() {
    const inscripcion: Inscripcion = this.inscripcionForm.value;
    inscripcion.inscripcion_id = this.inscripcionId;

    if (this.inscripcionId > 0) {
      this.inscripcionService.actualizar(inscripcion).subscribe(() => {
        Swal.fire('Inscripción Actualizada', 'La inscripción ha sido actualizada correctamente.', 'success');
        this.router.navigate(['/inscripciones']);
      });
    } else {
      this.inscripcionService.insertar(inscripcion).subscribe(() => {
        Swal.fire('Inscripción Creada', 'La inscripción ha sido creada correctamente.', 'success');
        this.router.navigate(['/inscripciones']);
      });
    }
  }
}
