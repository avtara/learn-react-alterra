import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
	uri: "https://kampus-merdeka-avtar.hasura.app/v1/graphql",
	cache: new InMemoryCache(),
	headers: {
		"x-hasura-admin-secret":
			"4yO9bN1GrDy5YjaXpHYKO0lEa6bc4Yy5WhoaRylwc1k9ytttkWXW1Rv5TnNFUenR",
	},
});

export default client;
