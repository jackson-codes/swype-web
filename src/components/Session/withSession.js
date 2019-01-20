import React from 'react';
import { Query } from 'react-apollo';
import { GET_ME } from './queries';

const withSession = Component => props => (
  <Query query={GET_ME}>
    {({ data, refetch }) => {
      return <Component {...props} session={data || { me: null }} refetch={refetch} />
    }}
  </Query>
);

export default withSession;
