import {Comment} from "./comment.type";
import {FindConditions, Repository} from "typeorm";

import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {PostEntity} from "./post.entity";
import {Author} from "./author.model";
// import { PostEntity } from "./post.entity";

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author)
    private readonly authorEntityRepository: Repository<Author>,
    @InjectRepository(PostEntity)
    private readonly postEntityRepository: Repository<PostEntity>,
  ) {}
  public createAuthor(authorData: Partial<Author>): Author {
    return Object.assign(new Author(), authorData);
  }
  public createComment(commentData: Partial<Comment>): Comment {
    return Object.assign(new Comment(), commentData);
  }

  public findOne(where: FindConditions<Author>): Promise<Author | undefined> {
    return this.authorEntityRepository.findOne({where});
  }

  public findAndCount(): Promise<[Author[], number]> {
    return this.authorEntityRepository.findAndCount();
  }
}
