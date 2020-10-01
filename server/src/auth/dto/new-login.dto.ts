import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsOptional, Length, MaxLength } from "class-validator";
import { Column, PrimaryGeneratedColumn } from "typeorm";

@InputType()
export class NewLoginDTO {
  @PrimaryGeneratedColumn()
  userId: string;

  @Field()
  @IsEmail()
  @Column()
  email: string;

  @Column()
  @Field()
  password: string;
}
