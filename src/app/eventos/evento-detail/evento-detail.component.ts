import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventoService } from '../../services/evento.service';
import { Evento } from '../../../../Interfaces/evento.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-evento-detail',
  templateUrl: './evento-detail.component.html',
  styleUrls: ['./evento-detail.component.scss']
})
export class EventoDetailComponent implements OnInit {
  eventoForm: FormGroup;
  eventoId: number = 0;
  titulo = 'Nuevo Evento';

  constructor(
    private eventoService: EventoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.eventoForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      fecha: new FormControl('', Validators.required),
      ubicacion: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.eventoId = parseInt(this.route.snapshot.paramMap.get('eventoId')!, 10);
    if (this.eventoId > 0) {
      this.titulo = 'Editar Evento';
      this.eventoService.uno(this.eventoId).subscribe((evento) => {
        this.eventoForm.setValue({
          nombre: evento.nombre,
          fecha: evento.fecha,
          ubicacion: evento.ubicacion,
          descripcion: evento.descripcion
        });
      });
    }
  }

  guardarEvento() {
    const evento: Evento = this.eventoForm.value;
    evento.evento_id = this.eventoId;

    if (this.eventoId > 0) {
      this.eventoService.actualizar(evento).subscribe(() => {
        Swal.fire('Evento Actualizado', 'El evento ha sido actualizado correctamente.', 'success');
        this.router.navigate(['/eventos']);
      });
    } else {
      this.eventoService.insertar(evento).subscribe(() => {
        Swal.fire('Evento Creado', 'El evento ha sido creado correctamente.', 'success');
        this.router.navigate(['/eventos']);
      });
    }
  }
}
