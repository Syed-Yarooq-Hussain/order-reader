import { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLInt } from 'graphql';


export const OrderType = new GraphQLObjectType({
  name: 'Orders',
  description: 'Get All Orders ',
  fields: () => ({
    uid: { type: GraphQLNonNull(GraphQLString) },
    bookingDate: { type: GraphQLNonNull(GraphQLInt) },
    title: { type: GraphQLNonNull(GraphQLString) },
  })
})
