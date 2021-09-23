import { InputType, ObjectType, PickType, Field } from "@nestjs/graphql";
import { Posts } from "../entities/posts.entity";

@InputType()
export class CreatePostsInput extends PickType(Posts, ["title", "contents"]) {}

@ObjectType()
export class CreatePostsOutput {
    @Field()
    readonly id: number;

    @Field()
    readonly title!: string;

    @Field()
    readonly contents!: string
}