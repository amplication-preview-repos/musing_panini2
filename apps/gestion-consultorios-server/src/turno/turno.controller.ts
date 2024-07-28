import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TurnoService } from "./turno.service";
import { TurnoControllerBase } from "./base/turno.controller.base";

@swagger.ApiTags("turnos")
@common.Controller("turnos")
export class TurnoController extends TurnoControllerBase {
  constructor(
    protected readonly service: TurnoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
