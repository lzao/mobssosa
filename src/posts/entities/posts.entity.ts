import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Field } from '@nestjs/graphql'

@Entity('posts')
export class Posts {
    @PrimaryGeneratedColumn()
    @Field(type => Number)
    id: number

    @Column()
    @Field(type => String)
    title: string

    @Column()
    @Field(type => String)
    contents: string
}