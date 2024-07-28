import { PacienteWhereUniqueInput } from "../paciente/PacienteWhereUniqueInput";

export type TurnoUpdateInput = {
  fechaHora?: Date | null;
  paciente?: PacienteWhereUniqueInput | null;
};
