import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {PostEntity} from "./post.entity";

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity])],
  controllers: [],
  providers: [],
})
export class PostModule {}
