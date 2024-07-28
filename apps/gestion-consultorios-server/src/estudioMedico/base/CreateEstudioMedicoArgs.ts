/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EstudioMedicoCreateInput } from "./EstudioMedicoCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateEstudioMedicoArgs {
  @ApiProperty({
    required: true,
    type: () => EstudioMedicoCreateInput,
  })
  @ValidateNested()
  @Type(() => EstudioMedicoCreateInput)
  @Field(() => EstudioMedicoCreateInput, { nullable: false })
  data!: EstudioMedicoCreateInput;
}

export { CreateEstudioMedicoArgs as CreateEstudioMedicoArgs };
