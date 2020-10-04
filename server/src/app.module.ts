import { LoginModule } from "./auth/login.module";
import { LoginPageModule } from "./page/loginpage.module";
import {
  Module,
  NestModule,
  RequestMethod,
  MiddlewareConsumer,
} from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { PostsModule } from "./posts/posts.module";
import { UsersModule } from "./users/users.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CommentsModule } from "./comments/comments.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import { LoggingPlugin } from "./common/plugins/logging.plugin";
import { PostsResolver } from "./posts/posts.resolver";
import { CommentsResolver } from "./comments/comments.resolver";
import { CommentsService } from "./comments/comments.service";
import { PostsService } from "./posts/posts.service";
import { LoginService } from "./auth/login.service";
import { LoginResolver } from "./auth/login.resolver";
import { PassportModule } from "@nestjs/passport";
import { AuthenticationMiddleware } from "./authentication.middleware";

@Module({
  imports: [
    PassportModule.register({ session: true }),
    LoginModule,
    LoginPageModule,
    AuthModule,
    UsersModule,
    PostsModule,
    CommentsModule,
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, "", "client"),
    // }),
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: "schema.gql",
      debug: true,
      playground: true,
      context: ({ req }) => ({ req }),
    }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "chumakovv",
      password: "chumakovv",
      database: "postgres",
      entities: ["dist/**/*.model.js", "dist/entities/*.js"],
      synchronize: true,
      logging: true,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    LoggingPlugin,
    PostsResolver,
    CommentsResolver,
    PostsService,
    CommentsService,
    LoginService,
    LoginResolver,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(AuthenticationMiddleware)
      .forRoutes({ path: "/**", method: RequestMethod.ALL });
  }
}
