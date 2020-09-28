import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    AuthModule,
    UsersModule,
    PostsModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'chumakovv',
      password: 'chumakovv',
      database: 'postgres',
      entities: ['dist/**/*.model.js'],
      synchronize: true,
      logging: true,
    }),
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
