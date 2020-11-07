import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Author} from "./author.model";
import {PostEntity} from "./post.entity";
import {PostResolver} from "./post.resolver";
import {PostService} from "./post.service";

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity])],
  providers: [PostResolver, PostService],
  // resolver: [PostResolver]
  exports: [PostService],
})
export class PostModule {}
