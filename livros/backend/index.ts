import { buildSchema } from "type-graphql"
import path from "path"
import { ApolloServer } from "apollo-server"
import "reflect-metadata";
import { bookResolver } from "../backend/src/resolvers/booksResolvers"

async function main() {
    const schema = await buildSchema({
        resolvers: [
            bookResolver
        ],

        emitSchemaFile: path.resolve(__dirname, "schema.gql")
    });

    const server = new ApolloServer({
        schema,
    })

    const { url } = await server.listen()

    console.log(url)

}

main()