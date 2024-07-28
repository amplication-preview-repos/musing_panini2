import { Turno } from "../turno/Turno";
import { EstudioMedico } from "../estudioMedico/EstudioMedico";

export type Paciente = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  nombre: string | null;
  apellido: string | null;
  fechaNacimiento: Date | null;
  dni: string | null;
  turnos?: Array<Turno>;
  estudioMedicos?: Array<EstudioMedico>;
};
