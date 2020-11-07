import React from 'react';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Redirect } from 'react-router';
import { Grid, Row, Col, Box, Alert } from '@smooth-ui/core-sc';
import { List as LoadingList } from 'react-content-loader';
// import { useQuery } from 'graphql-hooks'
import { useQuery } from '@apollo/react-hooks';

const QUERY = gql`
    query profile {
        listUsers {
            list {
                id
                email
            }
        }
    }
`;

const USERLIST_SUBSCRIPTION = gql`
    subscription Subscription {
        userList {
            list {
                id
                email
                roles
            }
            count
        }
    }
`;

function usePersons() {
    const { data, loading, fetchMore } = useQuery(QUERY, {
        notifyOnNetworkStatusChange: true,
    });
    if (loading && !data.list) return { loading, list: [] };
    const loadMore = () => {
        return fetchMore({
            query: QUERY,
            variables: {
                id: data.list.id,
                email: data.list.email,
            },
            updateQuery: (previousResult, { fetchMoreResult }) => {
                const newEdges = fetchMoreResult.list.edges;
                const pageInfo = fetchMoreResult.list.pageInfo;
                return newEdges.length
                    ? {
                          list: {
                              __typename: previousResult.list.__typename,
                              edges: [
                                  ...previousResult.list.edges,
                                  ...newEdges,
                              ],
                              pageInfo,
                          },
                      }
                    : previousResult;
            },
        });
    };
    return {
        list: data.list.edges.map(({ node }) => node),
        hasNextPage: data.list.pageInfo.hasNextPage,
        loading,
        loadMore,
    };
}

export default () => {
    if (!localStorage.getItem('auth-token')) <Redirect to="/" />;
    return (
        <Grid>
            <Row justifyContent="center">
                <Col>
                    <h1>Profile</h1>
                    <Box
                        p={10}
                        m={20}
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-between"
                        borderRadius={7}
                    ></Box>
                </Col>
            </Row>
        </Grid>
    );
};
