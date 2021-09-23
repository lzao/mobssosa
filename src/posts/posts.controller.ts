import { Body, ClassSerializerInterceptor, Controller, Get, Post, Put, Query, UseInterceptors } from '@nestjs/common';
import { CreatePostDto } from './dto/create-posts.dto';
import { PostsService } from './services/posts.service';

@Controller('posts')
@UseInterceptors(ClassSerializerInterceptor)
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    @Get()
    async getPosts(@Query('search') search: string) {
        console.log(search)
        if (search) {
            return this.postsService.searchForPosts(search)
        }
    }

    @Put()
    async createPost(@Body() post: CreatePostDto) {
        console.log(post)
        return this.postsService.createPost(post)
    }
}
