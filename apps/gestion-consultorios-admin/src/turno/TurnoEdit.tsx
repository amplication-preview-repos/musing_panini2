import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PacienteTitle } from "../paciente/PacienteTitle";

export const TurnoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="fechaHora" source="fechaHora" />
        <ReferenceInput
          source="paciente.id"
          reference="Paciente"
          label="Paciente"
        >
          <SelectInput optionText={PacienteTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
