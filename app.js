const express = require('express');
const graphqlHTTP = require('express-graphql');
const { makeExecutableSchema } = require('graphql-tools');
const app = express();
const PORT = 3000;

const typeDefs = `
  type Query {
    sayHello: String
  }
`;

const resolvers = {
  Query: {
    sayHello: () => "Hello World !!!"
  }
}

const executableSchema = makeExecutableSchema({ typeDefs, resolvers });

app.get('/', (req, res) => {
  res.send(`<a href='graphiql'>Click here</a> to access GraphiQL`);
});

app.use('/graphiql', graphqlHTTP({
  schema: executableSchema,
  graphiql: true,
  pretty: true,
}));

app.listen(
  PORT, 
  () => console.log(`GraphQL server is running on port ${PORT} ...`)
);
