import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AgendaWhereInput = {
  id?: StringFilter;
  fecha?: DateTimeNullableFilter;
  consultorio?: StringNullableFilter;
};
