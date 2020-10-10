import React from 'react';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Redirect } from 'react-router';
import { Grid, Row, Col, Box, Alert } from '@smooth-ui/core-sc';
import { List as LoadingList } from 'react-content-loader';

const QUERY = gql`
    query profile {
        listUser {
            id
            email
            post
        }
    }
`;

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
