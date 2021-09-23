import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { CreatePostDto } from '../dto/create-posts.dto';
import { Posts } from '../entities/posts.entity';
import { PostsSearchService } from './posts-search.service';

@Injectable()
export class PostsService {
    constructor(@InjectRepository(Posts) private postsRepository: Repository<Posts>, private postsSearchService: PostsSearchService) {}
    
    async createPost(post: CreatePostDto) {
        console.log(post)
        const newPost = await this.postsRepository.create({
            ...post
        })
        await this.postsRepository.save(newPost)
        this.postsSearchService.indexPost(newPost)
        return newPost
    }

    async searchForPosts(text: string) {
        const results = await this.postsSearchService.search(text)
        const ids = results.map(result => result.id)
        if (!ids.length) {
            return []
        }
        return this.postsRepository.find({
            where: { id: In(ids) }
        })
    }
}
