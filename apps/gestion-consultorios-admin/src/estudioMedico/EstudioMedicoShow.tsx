import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { PACIENTE_TITLE_FIELD } from "../paciente/PacienteTitle";

export const EstudioMedicoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
