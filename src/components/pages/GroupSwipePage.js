import React from 'react';

import withSession from '../session/withSession';
import NavBar from '../navigation/NavBar';
import { faTh } from '@fortawesome/free-solid-svg-icons';

const GroupSwipePage = ({ session }) => (
  <React.Fragment>
    <NavBar
      tabSelected="group"
      leftIconShowsMenu={false}
      leftIcon="arrow"
      rightButtonIcon={faTh}
    />
    <h2>Group Swipe Page</h2>
  </React.Fragment>
);

export default withSession(GroupSwipePage);
