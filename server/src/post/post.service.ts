import {Comment} from "./comment.type";
import {FindConditions, Repository} from "typeorm";

import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {PostEntity} from "./post.entity";

@Injectable()
export class PostService {
  findAll(arg0: {authorId: number}) {
    throw new Error("Method not implemented.");
  }
  constructor(
    @InjectRepository(PostEntity)
    private readonly postEntityRepository: Repository<PostEntity>,
  ) {}
  public createPost(postData: Partial<PostEntity>): PostEntity {
    return Object.assign(new PostEntity(), postData);
  }
  public createComment(commentData: Partial<Comment>): Comment {
    return Object.assign(new Comment(), commentData);
  }

  public findOne(where: FindConditions<PostEntity>): Promise<PostEntity | undefined> {
    return this.postEntityRepository.findOne({where});
  }

  public findAndCount(): Promise<[PostEntity[], number]> {
    return this.postEntityRepository.findAndCount();
  }
}
