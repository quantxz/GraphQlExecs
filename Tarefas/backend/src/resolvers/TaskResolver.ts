import { Arg, Mutation, Query, Resolver } from "type-graphql";
import crypto from "crypto"
import { task } from "../models/TaskModel";

@Resolver()
export class taskResolver {
    private tasks: task[] = []

    @Query(() => [task])
    public async Search() {
        return this.tasks
    }

    @Mutation(() => task)
    public async CreatTask(
        @Arg('title') title: string,
        @Arg('description') description: string
    ) {
        const task = { id: crypto.randomUUID(), title, description }

        this.tasks.push(task)

        return task
    }
}