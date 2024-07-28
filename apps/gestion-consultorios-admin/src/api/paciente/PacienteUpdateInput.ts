import { TurnoUpdateManyWithoutPacientesInput } from "./TurnoUpdateManyWithoutPacientesInput";
import { EstudioMedicoUpdateManyWithoutPacientesInput } from "./EstudioMedicoUpdateManyWithoutPacientesInput";

export type PacienteUpdateInput = {
  nombre?: string | null;
  apellido?: string | null;
  fechaNacimiento?: Date | null;
  dni?: string | null;
  turnos?: TurnoUpdateManyWithoutPacientesInput;
  estudioMedicos?: EstudioMedicoUpdateManyWithoutPacientesInput;
};
