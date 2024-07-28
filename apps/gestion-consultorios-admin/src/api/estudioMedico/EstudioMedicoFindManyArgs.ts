import { EstudioMedicoWhereInput } from "./EstudioMedicoWhereInput";
import { EstudioMedicoOrderByInput } from "./EstudioMedicoOrderByInput";

export type EstudioMedicoFindManyArgs = {
  where?: EstudioMedicoWhereInput;
  orderBy?: Array<EstudioMedicoOrderByInput>;
  skip?: number;
  take?: number;
};
