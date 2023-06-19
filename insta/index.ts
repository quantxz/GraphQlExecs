import { ApolloServer } from "apollo-server";
import path from "path";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { AllResolvers } from "./src/resolvers/AllResolvers";


async function main() {
    const schema = await buildSchema({
        resolvers: [
            AllResolvers
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