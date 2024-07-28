import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { TurnoListRelationFilter } from "../turno/TurnoListRelationFilter";
import { EstudioMedicoListRelationFilter } from "../estudioMedico/EstudioMedicoListRelationFilter";

export type PacienteWhereInput = {
  id?: StringFilter;
  nombre?: StringNullableFilter;
  apellido?: StringNullableFilter;
  fechaNacimiento?: DateTimeNullableFilter;
  dni?: StringNullableFilter;
  turnos?: TurnoListRelationFilter;
  estudioMedicos?: EstudioMedicoListRelationFilter;
};
