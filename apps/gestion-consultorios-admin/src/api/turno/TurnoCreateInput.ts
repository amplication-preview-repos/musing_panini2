import { PacienteWhereUniqueInput } from "../paciente/PacienteWhereUniqueInput";

export type TurnoCreateInput = {
  fechaHora?: Date | null;
  paciente?: PacienteWhereUniqueInput | null;
};
