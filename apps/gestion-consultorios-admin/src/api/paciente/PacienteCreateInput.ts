import { TurnoCreateNestedManyWithoutPacientesInput } from "./TurnoCreateNestedManyWithoutPacientesInput";
import { EstudioMedicoCreateNestedManyWithoutPacientesInput } from "./EstudioMedicoCreateNestedManyWithoutPacientesInput";

export type PacienteCreateInput = {
  nombre?: string | null;
  apellido?: string | null;
  fechaNacimiento?: Date | null;
  dni?: string | null;
  turnos?: TurnoCreateNestedManyWithoutPacientesInput;
  estudioMedicos?: EstudioMedicoCreateNestedManyWithoutPacientesInput;
};
