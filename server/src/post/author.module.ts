import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Author} from "./author.model";
import {AuthorService} from "./author.service";
import {AuthorsResolver} from "./authors.resolver";
import {PostEntity} from "./post.entity";
import {PostResolver} from "./post.resolver";
import {PostService} from "./post.service";

@Module({
  imports: [TypeOrmModule.forFeature([Author]), PostEntity],
  providers: [AuthorsResolver, AuthorService, PostService, PostResolver],
  // resolver: [PostResolver]
  exports: [AuthorService],
})
export class AuthorModule {}
