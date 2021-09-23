import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { Posts } from '../entities/posts.entity';
import { PostSearchBody } from '../interfaces/post-search-body.interface';
import { PostSearchResult } from '../interfaces/post-search-result.interface';

@Injectable()
export class PostsSearchService {
    index = 'posts'

    constructor(private readonly elasticsearchService: ElasticsearchService) {}

    async indexPost(post: Posts) {
        return this.elasticsearchService.index<PostSearchResult, PostSearchBody>({
            index: this.index,
            body: {
                id: post.id,
                title: post.title,
                contents: post.contents,
            }
        })
    }

    async search(text: string) {
        const { body } = await this.elasticsearchService.search<PostSearchResult>({
            index: this.index,
            body: {
                query: {
                    multi_match: {
                        query: text,
                        fields: ['title', 'contents']
                    }
                }
            }
        })
        const hits = body.hits.hits
        return hits.map((item) => item._source)
    }
}
