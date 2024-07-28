import { Paciente } from "../paciente/Paciente";

export type Turno = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  fechaHora: Date | null;
  paciente?: Paciente | null;
};
