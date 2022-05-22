import { OrderType } from "./ObjectType";

import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
  } from 'graphql';
  let Orders = require('../asset/data.json')

export const RootMutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root Mutation',
  fields: () => ({
    addOrder: {
      type: OrderType,
      description: 'Add a Order',
      args: {
        uid: { type: GraphQLNonNull(GraphQLString) },
        size: { type: GraphQLNonNull(GraphQLString) },
        title: { type: GraphQLNonNull(GraphQLString)},
      },
      resolve: (args: any) => {
        const order = { hash: args.hash , size: args.size, height:args.height, block_index:args.block_index }
        Orders.push(order)
        return order
      }
    },
    removeOrder: {
        type: OrderType,
        description: 'Remove a Order',
        args: {
          id: { type: new GraphQLNonNull(GraphQLInt) }
        },
        resolve: (args: any) => {
          Orders = Orders.filter((order : any) => order.id !== args.hash)
            return Orders[args.id]
        }
      },
  })
})
