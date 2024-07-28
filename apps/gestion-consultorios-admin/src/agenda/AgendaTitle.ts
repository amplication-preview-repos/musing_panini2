import { Agenda as TAgenda } from "../api/agenda/Agenda";

export const AGENDA_TITLE_FIELD = "consultorio";

export const AgendaTitle = (record: TAgenda): string => {
  return record.consultorio?.toString() || String(record.id);
};
