import React from 'react';

import withSession from '../session/withSession';

const IndividualSwipePage = ({ session }) => (
  <div>
    <h2>Landing Page</h2>
  </div>
);

export default withSession(IndividualSwipePage);
