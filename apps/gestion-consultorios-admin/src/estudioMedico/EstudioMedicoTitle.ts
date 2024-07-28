import { EstudioMedico as TEstudioMedico } from "../api/estudioMedico/EstudioMedico";

export const ESTUDIOMEDICO_TITLE_FIELD = "tipo";

export const EstudioMedicoTitle = (record: TEstudioMedico): string => {
  return record.tipo?.toString() || String(record.id);
};
