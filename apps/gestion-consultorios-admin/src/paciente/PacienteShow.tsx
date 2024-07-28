import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PACIENTE_TITLE_FIELD } from "./PacienteTitle";

export const PacienteShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="nombre" source="nombre" />
        <TextField label="apellido" source="apellido" />
        <TextField label="fechaNacimiento" source="fechaNacimiento" />
        <TextField label="dni" source="dni" />
        <ReferenceManyField
          reference="Turno"
          target="pacienteId"
          label="Turnos"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="fechaHora" source="fechaHora" />
            <ReferenceField
              label="Paciente"
              source="paciente.id"
              reference="Paciente"
            >
              <TextField source={PACIENTE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="EstudioMedico"
          target="pacienteId"
          label="EstudioMedicos"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="tipo" source="tipo" />
            <TextField label="fecha" source="fecha" />
            <TextField label="resultado" source="resultado" />
            <ReferenceField
              label="Paciente"
              source="paciente.id"
              reference="Paciente"
            >
              <TextField source={PACIENTE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
