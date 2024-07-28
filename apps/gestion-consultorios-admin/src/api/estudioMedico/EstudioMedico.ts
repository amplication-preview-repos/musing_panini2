import { Paciente } from "../paciente/Paciente";

export type EstudioMedico = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  tipo: string | null;
  fecha: Date | null;
  resultado: string | null;
  paciente?: Paciente | null;
};
