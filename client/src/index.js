import React from "react";
import { render } from "react-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import App from "./App";

const client = new ApolloClient({
  uri: 'http://127.0.0.1:3000/graphql',
  cache: new InMemoryCache(),
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
