import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EstudioMedicoService } from "./estudioMedico.service";
import { EstudioMedicoControllerBase } from "./base/estudioMedico.controller.base";

@swagger.ApiTags("estudioMedicos")
@common.Controller("estudioMedicos")
export class EstudioMedicoController extends EstudioMedicoControllerBase {
  constructor(
    protected readonly service: EstudioMedicoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
