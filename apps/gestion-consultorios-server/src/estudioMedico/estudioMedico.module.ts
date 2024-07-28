import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EstudioMedicoModuleBase } from "./base/estudioMedico.module.base";
import { EstudioMedicoService } from "./estudioMedico.service";
import { EstudioMedicoController } from "./estudioMedico.controller";
import { EstudioMedicoResolver } from "./estudioMedico.resolver";

@Module({
  imports: [EstudioMedicoModuleBase, forwardRef(() => AuthModule)],
  controllers: [EstudioMedicoController],
  providers: [EstudioMedicoService, EstudioMedicoResolver],
  exports: [EstudioMedicoService],
})
export class EstudioMedicoModule {}
