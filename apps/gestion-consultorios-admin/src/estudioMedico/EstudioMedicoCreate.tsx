import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PacienteTitle } from "../paciente/PacienteTitle";

export const EstudioMedicoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="tipo" source="tipo" />
        <DateTimeInput label="fecha" source="fecha" />
        <TextInput label="resultado" multiline source="resultado" />
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
