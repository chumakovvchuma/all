import { Module } from '@nestjs/common';
import { DateScalar } from '../common/scalars/date.scalar';
import { CommentsResolver } from './comments.resolver';
import { CommentsService } from './comments.service';

@Module({
  providers: [CommentsResolver, CommentsService, DateScalar],
})
export class CommentsModule {}
