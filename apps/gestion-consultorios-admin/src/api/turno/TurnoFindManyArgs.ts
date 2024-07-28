import { TurnoWhereInput } from "./TurnoWhereInput";
import { TurnoOrderByInput } from "./TurnoOrderByInput";

export type TurnoFindManyArgs = {
  where?: TurnoWhereInput;
  orderBy?: Array<TurnoOrderByInput>;
  skip?: number;
  take?: number;
};
