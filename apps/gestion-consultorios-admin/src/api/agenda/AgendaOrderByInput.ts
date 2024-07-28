import { SortOrder } from "../../util/SortOrder";

export type AgendaOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  fecha?: SortOrder;
  consultorio?: SortOrder;
};
