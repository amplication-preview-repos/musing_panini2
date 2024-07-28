import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EstudioMedicoServiceBase } from "./base/estudioMedico.service.base";

@Injectable()
export class EstudioMedicoService extends EstudioMedicoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
