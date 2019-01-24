import React from 'react';

import withSession from '../session/withSession';
import NavBar from '../navigation/NavBar';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const GroupEditPage = ({ session }) => (
  <React.Fragment>
    <NavBar
      tabSelected="group"
      leftIconShowsMenu={false}
      leftIcon="arrow"
      rightButtonIcon={faCheck}
    />
    <h2>New Group Page</h2>
  </React.Fragment>
);

export default withSession(GroupEditPage);
