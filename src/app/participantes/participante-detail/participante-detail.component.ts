import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ParticipanteService } from '../../services/participante.service';
import { Participante } from '../../../../Interfaces/participante.model';

@Component({
  selector: 'app-participante-detail',
  standalone: true,
  templateUrl: './participante-detail.component.html',
  styleUrls: ['./participante-detail.component.scss']
})
export class ParticipanteDetailComponent implements OnInit {
  frm_Participante = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    telefono: new FormControl('', Validators.required)
  });
  participanteId = 0;
  titulo = 'Nuevo Participante';

  constructor(
    private participanteService: ParticipanteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.participanteId = parseInt(this.route.snapshot.paramMap.get('id') || '0');
    if (this.participanteId > 0) {
      this.participanteService.uno(this.participanteId).subscribe((participante) => {
        this.frm_Participante.patchValue(participante);
        this.titulo = 'Editar Participante';
      });
    }
  }

  guardar() {
    let participante: Participante = this.frm_Participante.value as Participante;

    Swal.fire({
      title: 'Participantes',
      text: '¿Desea guardar los cambios?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Guardar'
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.participanteId > 0) {
          this.participanteService.actualizar(this.participanteId, participante).subscribe(() => {
            Swal.fire('Guardado', 'Participante actualizado', 'success');
            this.router.navigate(['/participantes']);
          });
        } else {
          this.participanteService.insertar(participante).subscribe(() => {
            Swal.fire('Guardado', 'Participante creado', 'success');
            this.router.navigate(['/participantes']);
          });
        }
      }
    });
  }
}
