import { Arg, Mutation, Query, Resolver } from "type-graphql";
import crypto from "crypto"
import { Book } from "../Model/BookModel";

@Resolver()
export class bookResolver {
    private books: Book[] = []

    @Query(() => [Book])
    public async Search() {
        return this.books
    }

    @Mutation(() => Book)
    public async Insert(
        @Arg('title') title: string,
        @Arg('author') author: string, 
        @Arg('genre') genre: string,
        @Arg('year') year: string, 
        @Arg('description') description: string ) {

        const book = { title, author, genre, year, description}

        this.books.push(book)

        return book
    }
}