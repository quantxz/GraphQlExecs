import { Field, InputType, ObjectType } from "type-graphql";

@ObjectType()
class Messages {
    @Field()
    title: string;

    @Field()
    content: string;

    @Field(() => AuthorObject)
    author: {
        name: string,
        id: string
    };
}

@ObjectType()
class AuthorObject {
    @Field()
    name: string;

    @Field()
    id: string;
}

@InputType()
class AuthorInput {
    @Field()
    name: string;

    @Field()
    id: string;
}

export { Messages, AuthorInput };
