const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull
} = graphql;

const PetType = require('./pet_type');
const CompanyType = require('./company_type');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    pet: {
      type: PetType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3000/pets/${args.id}`)
          .then(response => response.data);
      }
    },
    company: {
      type: CompanyType,
      args: { id: { type: GraphQLString }},
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3000/companies/${args.id}`)
          .then(response => response.data);
      }
    }
  }
});

module.exports = RootQuery;
