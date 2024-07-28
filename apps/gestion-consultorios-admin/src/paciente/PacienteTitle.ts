import { Paciente as TPaciente } from "../api/paciente/Paciente";

export const PACIENTE_TITLE_FIELD = "nombre";

export const PacienteTitle = (record: TPaciente): string => {
  return record.nombre?.toString() || String(record.id);
};
