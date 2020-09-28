import { Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from '../../users/models/users.model';
import { Comment } from '../../comments/models/comments.model';
import { ManyToMany, JoinTable, Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, JoinColumn, OneToMany, ManyToOne } from 'typeorm';

@Entity()
@ObjectType()
export class Post {
  @Field(type => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ length: 500, nullable: false })
  text: string;
  
  @ManyToOne(type => User, user => user.author)
  author: User;

  @OneToMany(type => Comment, comment => comment.id)
  comment: Comment[];

  @CreateDateColumn()
  @Field()
  creationDate: Date;
}
