const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull
} = graphql;

const PetType = require('./pet_type');
const CompanyType = require('./company_type');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addPet: {
      type: PetType,
      args: {
        firstName: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
        companyId: { type: GraphQLString }
      },
      resolve(parentValue, { firstName, age, companyId }) {
        return axios.post(`http://localhost:3000/pets`, { firstName, age, companyId })
          .then(response => response.data);
      }
    },
    deletePet: {
      type: PetType,
      args: {
        id: {type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parentValue, { id }) {
        return axios.delete(`http://localhost:3000/pets/${id}`)
          .then(response => response.data);
      }
    },
    editPet: {
      type: PetType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt },
        comapnyId: { type: GraphQLString}
      },
      resolve(parentValue, args) {
        return axios.patch(`http://localhost:3000/pets/${args.id}`, args)
          .then(response => response.data)
      }
    }
  }
});

module.exports = mutation;
