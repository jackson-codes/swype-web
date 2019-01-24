import React from 'react';

import withSession from '../session/withSession';
import NavBar from '../navigation/NavBar';
import { faHandPointer } from '@fortawesome/free-solid-svg-icons';

const IndividualSwipePage = ({ session }) => (
  <React.Fragment>
    <NavBar
      tabSelected="individual"
      leftIcon="hamburger"
      leftIconShowsMenu
      rightButtonIcon={faHandPointer}
    />
    <h2>Landing Page</h2>
  </React.Fragment>
);

export default withSession(IndividualSwipePage);
