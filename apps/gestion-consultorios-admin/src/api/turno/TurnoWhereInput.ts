import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { PacienteWhereUniqueInput } from "../paciente/PacienteWhereUniqueInput";

export type TurnoWhereInput = {
  id?: StringFilter;
  fechaHora?: DateTimeNullableFilter;
  paciente?: PacienteWhereUniqueInput;
};
