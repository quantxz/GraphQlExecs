import { ApolloServer } from "apollo-server"
import { buildSchema } from "type-graphql"
import "reflect-metadata"
import path from "path"
import { taskResolver } from "./src/resolvers/TaskResolver"

async function main() {
    const schema = await buildSchema({
        resolvers: [
            taskResolver
        ],

        emitSchemaFile: path.resolve(__dirname, "schema.gql")
    })

    const server = new ApolloServer({
        schema,
    })

    const { url } = await server.listen()

    console.log(url)
}

main()