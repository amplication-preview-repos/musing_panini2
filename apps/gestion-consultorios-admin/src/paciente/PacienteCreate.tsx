import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TurnoTitle } from "../turno/TurnoTitle";
import { EstudioMedicoTitle } from "../estudioMedico/EstudioMedicoTitle";

export const PacienteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="nombre" source="nombre" />
        <TextInput label="apellido" source="apellido" />
        <DateTimeInput label="fechaNacimiento" source="fechaNacimiento" />
        <TextInput label="dni" source="dni" />
        <ReferenceArrayInput
          source="turnos"
          reference="Turno"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TurnoTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="estudioMedicos"
          reference="EstudioMedico"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EstudioMedicoTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
