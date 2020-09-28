import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ManyToMany, Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne } from 'typeorm';
import { User } from '../../users/models/users.model';

@Entity()
@ObjectType()
export class Comment {
  @Field(type => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ length: 500, nullable: false })
  comment: string;

  @ManyToOne(type => User, user => user.comment)
    user: User;

  // @Field({ nullable: true })
  // @ManyToOne(type => User, user => user.id)
  // author: User[];
  
  // @ManyToMany(type => User, user => user.comments)
  //   comments: User[];

  @CreateDateColumn()
  @Field()
  creationDate: Date;

  // @Field()
  // @ManyToOne(type => Comment, comment => comment.id)
  // comment: Comment;

  // @Field()
  // @OneToMany(type => Comment, comments => comments.id)
  // comments: Comment[];
}
