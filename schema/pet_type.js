const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} = graphql;

const CompanyType = require('./company_type');

const PetType = new GraphQLObjectType({
  name: 'Pet',
  fields: () => ({
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
    company: {
      type: CompanyType,
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3000/companies/${parentValue.companyId}`)
          .then(response => response.data);
      }
     }
  })
});

module.exports = PetType;
