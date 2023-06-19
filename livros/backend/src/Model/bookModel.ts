import { Field, ID, ObjectType } from "type-graphql";


@ObjectType()
class Book {
    @Field()
    title: string;

    @Field()
    author: string;

    @Field()
    genre: string;

    @Field()
    year: string;

    @Field()
    description: string;

}

export { Book }
