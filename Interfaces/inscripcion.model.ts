export interface Inscripcion {
    fecha(arg0: string, fecha: any): unknown;
    inscripcion_id: number;   // O el ID que prefieras para las inscripciones
    evento_id: number;        // Relación con la tabla `Eventos`
    participante_id: number;  // Relación con la tabla `Participantes`
    fecha_inscripcion: string;  // La fecha en la que se realizó la inscripción
  }
  