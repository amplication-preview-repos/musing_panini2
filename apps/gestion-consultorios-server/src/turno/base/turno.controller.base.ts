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
import { TurnoService } from "../turno.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TurnoCreateInput } from "./TurnoCreateInput";
import { Turno } from "./Turno";
import { TurnoFindManyArgs } from "./TurnoFindManyArgs";
import { TurnoWhereUniqueInput } from "./TurnoWhereUniqueInput";
import { TurnoUpdateInput } from "./TurnoUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TurnoControllerBase {
  constructor(
    protected readonly service: TurnoService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Turno })
  @nestAccessControl.UseRoles({
    resource: "Turno",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createTurno(@common.Body() data: TurnoCreateInput): Promise<Turno> {
    return await this.service.createTurno({
      data: {
        ...data,

        paciente: data.paciente
          ? {
              connect: data.paciente,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        fechaHora: true,

        paciente: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Turno] })
  @ApiNestedQuery(TurnoFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Turno",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async turnos(@common.Req() request: Request): Promise<Turno[]> {
    const args = plainToClass(TurnoFindManyArgs, request.query);
    return this.service.turnos({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        fechaHora: true,

        paciente: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Turno })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Turno",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async turno(
    @common.Param() params: TurnoWhereUniqueInput
  ): Promise<Turno | null> {
    const result = await this.service.turno({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        fechaHora: true,

        paciente: {
          select: {
            id: true,
          },
        },
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
  @swagger.ApiOkResponse({ type: Turno })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Turno",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateTurno(
    @common.Param() params: TurnoWhereUniqueInput,
    @common.Body() data: TurnoUpdateInput
  ): Promise<Turno | null> {
    try {
      return await this.service.updateTurno({
        where: params,
        data: {
          ...data,

          paciente: data.paciente
            ? {
                connect: data.paciente,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          fechaHora: true,

          paciente: {
            select: {
              id: true,
            },
          },
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
  @swagger.ApiOkResponse({ type: Turno })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Turno",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteTurno(
    @common.Param() params: TurnoWhereUniqueInput
  ): Promise<Turno | null> {
    try {
      return await this.service.deleteTurno({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          fechaHora: true,

          paciente: {
            select: {
              id: true,
            },
          },
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