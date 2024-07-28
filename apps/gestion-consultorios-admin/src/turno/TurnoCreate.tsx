import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PacienteTitle } from "../paciente/PacienteTitle";

export const TurnoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
