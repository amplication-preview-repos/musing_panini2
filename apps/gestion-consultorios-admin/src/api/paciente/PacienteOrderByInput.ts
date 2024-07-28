import { SortOrder } from "../../util/SortOrder";

export type PacienteOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  nombre?: SortOrder;
  apellido?: SortOrder;
  fechaNacimiento?: SortOrder;
  dni?: SortOrder;
};
