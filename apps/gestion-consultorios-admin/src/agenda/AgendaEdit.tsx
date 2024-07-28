import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const AgendaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="fecha" source="fecha" />
        <TextInput label="consultorio" source="consultorio" />
      </SimpleForm>
    </Edit>
  );
};
