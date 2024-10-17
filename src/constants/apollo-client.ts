import { ApolloClient, InMemoryCache } from "@apollo/client";
import { API_URL } from "./urls";

const uri = `${API_URL}/graphql`;

export const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
  credentials: "include",
});

export default client;
