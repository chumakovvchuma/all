import { Module } from '@nestjs/common';
import { DateScalar } from '../common/scalars/date.scalar';
import { PostsResolver } from './Posts.resolver';
import { PostsService } from './Posts.service';

@Module({
  providers: [PostsResolver, PostsService, DateScalar],
})
export class PostsModule {}
