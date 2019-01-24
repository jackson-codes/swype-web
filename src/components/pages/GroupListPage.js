import React from 'react';
import { Link } from 'react-router-dom';
import withSession from '../session/withSession';
import NavBar from '../navigation/NavBar';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const GroupListPage = ({ session }) => (
  <React.Fragment>
    <NavBar
      tabSelected="group"
      leftIconShowsMenu
      rightButtonIcon={faPlus}
    />
    <h2>Group Swipe Page</h2>
    <Link to="/groups/1">Swipe</Link>
    <Link to="/groups/1/edit">Edit</Link>
  </React.Fragment>
);

export default withSession(GroupListPage);
