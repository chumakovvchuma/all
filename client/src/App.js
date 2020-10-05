import React from "react";
import { LoonaProvider, createLoona } from "@loona/react";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";

import { Root } from "./Root";
import { states } from "./states";

const cache = new InMemoryCache();

const loona = createLoona(cache);
const client = new ApolloClient({
  link: loona,
  cache,
  uri: "http://127.0.0.1:3000/graphql",
  playground: true,
});

export class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <LoonaProvider loona={loona} states={states}>
          <Root />
        </LoonaProvider>
      </ApolloProvider>
    );
  }
}
