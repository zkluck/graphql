var { buildSchema } = require('graphql');

const typeDefs = buildSchema(`
    type Book {
        title: String
        author: String
    }
    type Query {
        books: [Book]
    }
`)

const books = [
    {
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling',
    },
    {
        title: 'Jurassic Park',
        author: 'Michael Crichton',
    },
]

const resolvers = {
    books: () =>{
        return books
    }
};

module.exports = {
    resolvers,
    typeDefs
}
