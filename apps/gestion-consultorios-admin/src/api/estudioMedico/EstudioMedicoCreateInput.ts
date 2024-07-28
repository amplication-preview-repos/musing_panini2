import { PacienteWhereUniqueInput } from "../paciente/PacienteWhereUniqueInput";

export type EstudioMedicoCreateInput = {
  tipo?: string | null;
  fecha?: Date | null;
  resultado?: string | null;
  paciente?: PacienteWhereUniqueInput | null;
};
