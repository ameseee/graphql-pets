const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} = graphql;

const PetType = require('./pet_type');

const CompanyType = new GraphQLObjectType({
  name: 'Company',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    pets: {
      type: new GraphQLList(PetType),
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3000/companies/${parentValue.id}/pets`)
        .then(response => response.data);
      }
    }
  })
});

module.exports = CompanyType;
