import { Turno as TTurno } from "../api/turno/Turno";

export const TURNO_TITLE_FIELD = "id";

export const TurnoTitle = (record: TTurno): string => {
  return record.id?.toString() || String(record.id);
};
