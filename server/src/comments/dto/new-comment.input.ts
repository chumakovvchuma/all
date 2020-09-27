import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, Length, MaxLength } from 'class-validator';

@InputType()
export class NewCommentInput {
  @Field()
  @MaxLength(30)
  text: string;

  @Field({ nullable: true })
  @IsOptional()
  @Length(30, 255)
  description?: string;

  @Field(type => [String])
  ingredients: string[];
}
