const {ApolloServer} = require('apollo-server');

const typeDefs = require('./typeDefs/auth_type_defs');
const resolvers = require('./resolvers/auth_resolver');
const AuthAPI = require('./dataSources/auth_api');

//const auth = require('./utils/auth');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    authAPI: new AuthAPI(),

  }),
  introspection: true,
  playground: true,
});

server.listen(process.env.PORT || 4000).then(({url}) => {
  console.log(`🚀 Server ready at ${url}`);
});