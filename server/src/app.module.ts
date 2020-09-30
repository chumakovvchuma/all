import { LoginPageModule } from "./page/loginpage.module";
import { Module } from "@nestjs/common";
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

@Module({
  imports: [
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
  providers: [AppService, LoggingPlugin],
})
export class AppModule {}
