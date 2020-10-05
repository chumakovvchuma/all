import {decorate} from '@loona/react';
import {state, mutation, update} from '@loona/react';
import gql from 'graphql-tag';

// Actions

export class Login {
  static mutation = gql`
    mutation {
  login(email: "trejgun@gmail.com", password: "My5up3r5tr0ngP@55w0rd") {
    accessToken
    refreshToken
    accessTokenExpiresAt
    refreshTokenExpiresAt
  }
}
  `;
  constructor($password, $email) {
    this.email = $email;
    this.password = $password;
    this.refreshToken = $refreshToken;
  }
}

// GraphQL

export const listUsers = gql`
  query listUsers @client {
     Query {
      profile
      listUsers
    }
  }
`;

export class SignUp {
  static mutation = gql` mutation signup {

  }

  query recentBook @client {
    recentBook {
      id
      title
    }
  }
`;

// State

export class BooksState {
  addBook({title}) {
    return {
      id: Math.random()
        .toString(16)
        .substr(2),
      title,
      __typename: 'Book',
    };
  }

  updateBooks(mutation, {patchQuery}) {
    patchQuery(allBooks, data => {
      data.books.push(mutation.result);
    });
  }

  setRecent(mutation, {patchQuery}) {
    patchQuery(recentBook, data => {
      data.recentBook = mutation.result;
    });
  }
}

// Define options
state({
  defaults: {
    books: [
      {
        id: Math.random()
          .toString(16)
          .substr(2),
        title: 'Harry Potter',
        __typename: 'Book',
      },
    ],
    recentBook: null,
  },
})(BooksState);

// Decorate the state
decorate(BooksState, {
  addBook: mutation(AddBook),
  updateBooks: update(AddBook),
  setRecent: update(AddBook),
});
