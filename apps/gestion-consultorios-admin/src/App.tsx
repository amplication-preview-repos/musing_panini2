import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TurnoList } from "./turno/TurnoList";
import { TurnoCreate } from "./turno/TurnoCreate";
import { TurnoEdit } from "./turno/TurnoEdit";
import { TurnoShow } from "./turno/TurnoShow";
import { PacienteList } from "./paciente/PacienteList";
import { PacienteCreate } from "./paciente/PacienteCreate";
import { PacienteEdit } from "./paciente/PacienteEdit";
import { PacienteShow } from "./paciente/PacienteShow";
import { EstudioMedicoList } from "./estudioMedico/EstudioMedicoList";
import { EstudioMedicoCreate } from "./estudioMedico/EstudioMedicoCreate";
import { EstudioMedicoEdit } from "./estudioMedico/EstudioMedicoEdit";
import { EstudioMedicoShow } from "./estudioMedico/EstudioMedicoShow";
import { AgendaList } from "./agenda/AgendaList";
import { AgendaCreate } from "./agenda/AgendaCreate";
import { AgendaEdit } from "./agenda/AgendaEdit";
import { AgendaShow } from "./agenda/AgendaShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"GestionConsultorios"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Turno"
          list={TurnoList}
          edit={TurnoEdit}
          create={TurnoCreate}
          show={TurnoShow}
        />
        <Resource
          name="Paciente"
          list={PacienteList}
          edit={PacienteEdit}
          create={PacienteCreate}
          show={PacienteShow}
        />
        <Resource
          name="EstudioMedico"
          list={EstudioMedicoList}
          edit={EstudioMedicoEdit}
          create={EstudioMedicoCreate}
          show={EstudioMedicoShow}
        />
        <Resource
          name="Agenda"
          list={AgendaList}
          edit={AgendaEdit}
          create={AgendaCreate}
          show={AgendaShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
