import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const AgendaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="fecha" source="fecha" />
        <TextInput label="consultorio" source="consultorio" />
      </SimpleForm>
    </Create>
  );
};
