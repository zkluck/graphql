const Koa = require('koa')
const KoaStatic = require('koa-static')
const bodyParser = require('koa-bodyparser')
const Router = require('koa-router')
const Graphql = require('graphql-server-koa')

const app = new Koa()
const router = new Router();

app.use(bodyParser());
app.use(KoaStatic(__dirname + '/static'));


const schema = require('./graphql/schema1')

router.post('/graphql', async (ctx, next) => {
    await Graphql.graphqlKoa({schema: schema.typeDefs, rootValue:schema.resolvers })(ctx, next)
  })
  .get('/graphql', async (ctx, next) => {
    await Graphql.graphqlKoa({schema: schema.typeDefs, rootValue:schema.resolvers})(ctx, next)
  })
  .get('/graphiql', async (ctx, next) => {
    await Graphql.graphiqlKoa({endpointURL: '/graphql'})(ctx, next)
  })

app.use(router.routes())
   .use(router.allowedMethods());


app.listen(4000, () => {
    console.log('🚀 GraphQL-demo server listen at http://localhost:4000')
 })