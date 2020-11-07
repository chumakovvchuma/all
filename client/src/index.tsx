import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { WebSocketLink } from '@apollo/client/link/ws';

const backendUrl = process.env.REACT_APP_BACKEND_URL;
process.env.NODE_ENV === 'development' &&
    console.log(`☄️Querying backend: ${backendUrl}`);

const httpLink = createHttpLink({
    uri: backendUrl,
});

const wsLink = new WebSocketLink({
    uri: `ws://localhost:5000/`,
    options: {
        reconnect: true,
    },
});

const authLink = setContext((_, { headers }) => {
    const accessToken = localStorage.getItem('auth-token');
    return {
        headers: {
            ...headers,
            authorization: accessToken ? `Bearer ${accessToken}` : '',
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
