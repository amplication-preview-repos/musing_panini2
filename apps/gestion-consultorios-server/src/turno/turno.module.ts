import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TurnoModuleBase } from "./base/turno.module.base";
import { TurnoService } from "./turno.service";
import { TurnoController } from "./turno.controller";
import { TurnoResolver } from "./turno.resolver";

@Module({
  imports: [TurnoModuleBase, forwardRef(() => AuthModule)],
  controllers: [TurnoController],
  providers: [TurnoService, TurnoResolver],
  exports: [TurnoService],
})
export class TurnoModule {}
