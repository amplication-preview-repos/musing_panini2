import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { EstudioMedicoResolverBase } from "./base/estudioMedico.resolver.base";
import { EstudioMedico } from "./base/EstudioMedico";
import { EstudioMedicoService } from "./estudioMedico.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => EstudioMedico)
export class EstudioMedicoResolver extends EstudioMedicoResolverBase {
  constructor(
    protected readonly service: EstudioMedicoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
