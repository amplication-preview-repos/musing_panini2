import { SortOrder } from "../../util/SortOrder";

export type EstudioMedicoOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  tipo?: SortOrder;
  fecha?: SortOrder;
  resultado?: SortOrder;
  pacienteId?: SortOrder;
};
