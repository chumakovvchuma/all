import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsOptional, Length, MaxLength } from "class-validator";
import { Column, PrimaryGeneratedColumn } from "typeorm";

@InputType()
export class NewLoginDTO {
  @PrimaryGeneratedColumn()
  userId: string;

  @Field({ nullable: true })
  @IsEmail()
  @Column()
  email: string;

  @Column()
  @Field({ nullable: true })
  password: string;
}
