import { ID, ObjectType, Field } from "type-graphql";


@ObjectType()
class task {
    @Field(_type => ID)
    id: string

    @Field()
    title: string

    @Field()
    description: string

}

export { task }