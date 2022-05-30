import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList
  } from 'graphql';
import {OrderType} from './ObjectType'; 
//import { getAllOrders } from '../model/orderModel'

import * as orders from '../asset/data.json'

export const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Fetch Orders',
  fields: () => ({
    Orders: {
      type: new GraphQLList(OrderType),
      args: {
        first : {type:GraphQLInt},
        skip : {type:GraphQLInt}
      },
      description: 'List of All Orders',
      resolve: async (parent , args : any ) => {
        //let orders= await getAllOrders();
        return orders.slice(args.first,args.skip)
      }
    },
  
    Block: {
      type: OrderType,
      description: 'A Single Block',
      args: {
        id: { type: GraphQLString }
      },
      
      resolve: async (parent, args: any) => {
        //let orders= await getAllOrders()
        orders.find((order: any) => order.id === args.id)
      }
    },
  })
})
