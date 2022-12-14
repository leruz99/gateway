const {ApolloServer} = require('apollo-server');

const typeDefs = require('./typeDefs' );
const resolvers = require('./resolvers');
const AuthAPI = require('./dataSources/auth_api');
const ProductAPI = require('./dataSources/product_api');

//const auth = require('./utils/auth');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    authAPI: new AuthAPI(),
    productAPI: new ProductAPI(),

  }),
  introspection: true,
  playground: true,
});

server.listen(process.env.PORT || 4000).then(({url}) => {
  console.log(`🚀 Server ready at ${url}`);
});