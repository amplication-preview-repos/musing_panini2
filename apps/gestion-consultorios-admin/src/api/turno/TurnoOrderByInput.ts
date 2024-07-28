import { SortOrder } from "../../util/SortOrder";

export type TurnoOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  fechaHora?: SortOrder;
  pacienteId?: SortOrder;
};
