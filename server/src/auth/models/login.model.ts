import { Field, ObjectType, ID } from "@nestjs/graphql";
import { User } from "src/users/models/users.model";
import {
  ManyToMany,
  JoinTable,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  JoinColumn,
  OneToMany,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
  Index,
} from "typeorm";

@Entity()
@ObjectType()
@Index(["userId", "email", "password"])
export class Login {
  @PrimaryGeneratedColumn("uuid")
  @OneToMany((type) => Login, (id) => id.userId)
  userId: string;

  @Column()
  @Field((type) => String)
  @OneToOne((type) => User, (user) => user.email)
  email: string;

  @Field((type) => String)
  @Column()
  password: string;
}
