const graphql = require('graphql');
const axios = require('axios');

const { GraphQLSchema } = graphql;
const RootQueryType = require('./root_query_type');
const mutation = require('./mutations');

module.exports = new GraphQLSchema({
  query: RootQueryType,
  mutation
});
