import { ObjectType } from "@nestjs/graphql";
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
} from "typeorm";

@Entity()
@ObjectType()
export class Login {
  @PrimaryColumn()
  @OneToOne((type) => User, (user) => user.email)
  email: string;

  @Column()
  password: string;
}
