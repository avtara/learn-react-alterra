import { ApolloClient, InMemoryCache } from "@apollo/client";
import { WebSocketLink } from '@apollo/client/link/ws';

import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';

const httpLink = new HttpLink({
	uri: 'https://kampus-merdeka-avtar.hasura.app/v1/graphql',
	headers: {
		"x-hasura-admin-secret":
			"4yO9bN1GrDy5YjaXpHYKO0lEa6bc4Yy5WhoaRylwc1k9ytttkWXW1Rv5TnNFUenR",
	}
  });
  
  const wsLink = new WebSocketLink({
	uri: 'wss://kampus-merdeka-avtar.hasura.app/v1/graphql',
	options: {
	  reconnect: true,
	  connectionParams: {
		headers: {
			"x-hasura-admin-secret":
			"4yO9bN1GrDy5YjaXpHYKO0lEa6bc4Yy5WhoaRylwc1k9ytttkWXW1Rv5TnNFUenR",
		}
	  }
	},
  });
  
  // The split function takes three parameters:
  //
  // * A function that's called for each operation to execute
  // * The Link to use for an operation if the function returns a "truthy" value
  // * The Link to use for an operation if the function returns a "falsy" value
  const splitLink = split(
	({ query }) => {
	  const definition = getMainDefinition(query);
	  return (
		definition.kind === 'OperationDefinition' &&
		definition.operation === 'subscription'
	  );
	},
	wsLink,
	httpLink,
  );

const client = new ApolloClient({
	uri: splitLink,
	cache: new InMemoryCache(),
	headers: {
		"x-hasura-admin-secret":
			"4yO9bN1GrDy5YjaXpHYKO0lEa6bc4Yy5WhoaRylwc1k9ytttkWXW1Rv5TnNFUenR",
	},
});

export default client;
