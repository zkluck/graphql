const Koa = require('koa')
const KoaStatic = require('koa-static')
const bodyParser = require('koa-bodyparser')
const { ApolloServer } = require('apollo-server-koa')
const { typeDefs, resolvers } = require('./graphql/schema')
const app = new Koa()

const apollo = new ApolloServer({ typeDefs, resolvers })

app.use(bodyParser())
app.use(KoaStatic(__dirname + '/static'))

// 使用apollo
app.use(apollo.getMiddleware())

app.listen(4000, () => {
   console.log('🚀 GraphQL-demo server listen at http://localhost:4000\n')
   console.log(`🚀 Server ready at http://localhost:4000${apollo.graphqlPath}`)
})