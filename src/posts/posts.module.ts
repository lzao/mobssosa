import { Module } from '@nestjs/common';
import { PostsSearchService } from './services/posts-search.service';
import { PostsService } from './services/posts.service';
import { PostsController } from './posts.controller';
import { ElasticsearchModule, ElasticsearchService } from '@nestjs/elasticsearch';
import { ElasticSearchConfigServiceService } from 'src/config/elastic-search-config-service.service';
import { Repository } from 'typeorm';
import { Posts } from './entities/posts.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ElasticsearchModule.registerAsync({
      useClass: ElasticSearchConfigServiceService,
    }),
    TypeOrmModule.forFeature([Posts]),
  ],
  providers: [PostsSearchService, PostsService],
  controllers: [PostsController]
})
export class PostsModule {}
