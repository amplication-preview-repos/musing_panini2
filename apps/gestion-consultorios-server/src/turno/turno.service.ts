import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TurnoServiceBase } from "./base/turno.service.base";

@Injectable()
export class TurnoService extends TurnoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
