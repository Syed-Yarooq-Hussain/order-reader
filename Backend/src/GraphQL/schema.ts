import { GraphQLSchema } from 'graphql';
import { RootMutationType } from './muation';
import { RootQueryType } from './query';

export const Orderschema = new GraphQLSchema({
        query: RootQueryType,
        mutation: RootMutationType
})
