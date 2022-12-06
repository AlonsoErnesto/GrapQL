const { ApolloServer } = require('apollo-server');
const typeDefs = require('./db/schema.gql');
const resolvers = require('./db/resolvers.gql');


// servidor
const server = new ApolloServer({
   typeDefs,
   resolvers,
   context : () => {
      const miContext = "Hola";
      return {
         miContext
      }
   }
});


// arrancar el servidor
server.listen().then(({url}) => {
   console.log(`Servidor corriendo en el puerto ${url}`);
});