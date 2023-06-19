import { Query, Resolver, Mutation, Arg } from "type-graphql";
import { Messages, AuthorInput } from "../model/messagesModel";


@Resolver()
export class AllResolvers {
    private tasks: Messages[] = [];

    @Query(() => [Messages])
    public async Search() {
        return this.tasks;
    }

    @Mutation(() => Messages)
    public async create(
        @Arg('title') title: string,
        @Arg('content') content: string,
        @Arg('author', () => AuthorInput) author: AuthorInput
    ) {
        const message: Messages = { title, content, author };
        this.tasks.push(message);
        
        return message;
    }
}
