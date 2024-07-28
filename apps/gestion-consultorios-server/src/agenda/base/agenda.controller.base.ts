/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { AgendaService } from "../agenda.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AgendaCreateInput } from "./AgendaCreateInput";
import { Agenda } from "./Agenda";
import { AgendaFindManyArgs } from "./AgendaFindManyArgs";
import { AgendaWhereUniqueInput } from "./AgendaWhereUniqueInput";
import { AgendaUpdateInput } from "./AgendaUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AgendaControllerBase {
  constructor(
    protected readonly service: AgendaService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Agenda })
  @nestAccessControl.UseRoles({
    resource: "Agenda",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createAgenda(@common.Body() data: AgendaCreateInput): Promise<Agenda> {
    return await this.service.createAgenda({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        fecha: true,
        consultorio: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Agenda] })
  @ApiNestedQuery(AgendaFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Agenda",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async agendaItems(@common.Req() request: Request): Promise<Agenda[]> {
    const args = plainToClass(AgendaFindManyArgs, request.query);
    return this.service.agendaItems({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        fecha: true,
        consultorio: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Agenda })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Agenda",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async agenda(
    @common.Param() params: AgendaWhereUniqueInput
  ): Promise<Agenda | null> {
    const result = await this.service.agenda({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        fecha: true,
        consultorio: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Agenda })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Agenda",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateAgenda(
    @common.Param() params: AgendaWhereUniqueInput,
    @common.Body() data: AgendaUpdateInput
  ): Promise<Agenda | null> {
    try {
      return await this.service.updateAgenda({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          fecha: true,
          consultorio: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Agenda })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Agenda",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteAgenda(
    @common.Param() params: AgendaWhereUniqueInput
  ): Promise<Agenda | null> {
    try {
      return await this.service.deleteAgenda({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          fecha: true,
          consultorio: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
