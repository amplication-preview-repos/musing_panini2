/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PacienteWhereInput } from "./PacienteWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PacienteListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PacienteWhereInput,
  })
  @ValidateNested()
  @Type(() => PacienteWhereInput)
  @IsOptional()
  @Field(() => PacienteWhereInput, {
    nullable: true,
  })
  every?: PacienteWhereInput;

  @ApiProperty({
    required: false,
    type: () => PacienteWhereInput,
  })
  @ValidateNested()
  @Type(() => PacienteWhereInput)
  @IsOptional()
  @Field(() => PacienteWhereInput, {
    nullable: true,
  })
  some?: PacienteWhereInput;

  @ApiProperty({
    required: false,
    type: () => PacienteWhereInput,
  })
  @ValidateNested()
  @Type(() => PacienteWhereInput)
  @IsOptional()
  @Field(() => PacienteWhereInput, {
    nullable: true,
  })
  none?: PacienteWhereInput;
}
export { PacienteListRelationFilter as PacienteListRelationFilter };
