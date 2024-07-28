import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { PacienteWhereUniqueInput } from "../paciente/PacienteWhereUniqueInput";

export type EstudioMedicoWhereInput = {
  id?: StringFilter;
  tipo?: StringNullableFilter;
  fecha?: DateTimeNullableFilter;
  resultado?: StringNullableFilter;
  paciente?: PacienteWhereUniqueInput;
};
