/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Agenda as PrismaAgenda } from "@prisma/client";

export class AgendaServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.AgendaCountArgs, "select">): Promise<number> {
    return this.prisma.agenda.count(args);
  }

  async agendaItems(args: Prisma.AgendaFindManyArgs): Promise<PrismaAgenda[]> {
    return this.prisma.agenda.findMany(args);
  }
  async agenda(
    args: Prisma.AgendaFindUniqueArgs
  ): Promise<PrismaAgenda | null> {
    return this.prisma.agenda.findUnique(args);
  }
  async createAgenda(args: Prisma.AgendaCreateArgs): Promise<PrismaAgenda> {
    return this.prisma.agenda.create(args);
  }
  async updateAgenda(args: Prisma.AgendaUpdateArgs): Promise<PrismaAgenda> {
    return this.prisma.agenda.update(args);
  }
  async deleteAgenda(args: Prisma.AgendaDeleteArgs): Promise<PrismaAgenda> {
    return this.prisma.agenda.delete(args);
  }
}
