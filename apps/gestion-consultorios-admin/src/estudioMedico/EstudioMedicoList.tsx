import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PACIENTE_TITLE_FIELD } from "../paciente/PacienteTitle";

export const EstudioMedicoList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"EstudioMedicos"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
