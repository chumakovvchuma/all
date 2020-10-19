import {PostModule} from "./post/post.module";
import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {APP_GUARD, APP_PIPE} from "@nestjs/core";
import {GraphQLModule} from "@nestjs/graphql";

import {AuthModule} from "./auth/auth.module";
import {UserModule} from "./user/user.module";
import {TypeOrmConfigService} from "./typeorm.options";
import {GqlConfigService} from "./graphql.options";
import {JwtGuard, RolesGuard} from "./common/guards";
import {CustomValidationPipe} from "./common/pipes";
import {TypeGraphQLModule} from "typegraphql-nestjs";
import {PubSub} from "graphql-subscriptions";
import {PostResolver} from "./post/post.resolver";

@Module({
  providers: [
    PostResolver,
    {
      provide: "PUB_SUB",
      useValue: new PubSub(),
    },
    {
      provide: APP_PIPE,
      useClass: CustomValidationPipe,
    },
    {
      provide: APP_GUARD,
      useClass: JwtGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    GraphQLModule.forRootAsync({
      useClass: GqlConfigService,
    }),

    AuthModule,
    UserModule,
    PostModule,
  ],
})
export class ApplicationModule {}
