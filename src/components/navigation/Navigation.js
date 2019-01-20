import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../../constants/routes';
import SignOutButton from '../auth/SignOut';

const Navigation = ({ session }) => (
  <div>
    {session && session.me ? (
      <NavigationAuth session={session} />
    ) : (
      <NavigationNonAuth />
    )}
  </div>
);

const NavigationAuth = ({ session }) => (
  <ul>
    <li>
      <Link to={routes.SWIPE}>Swipe</Link>
    </li>
    <li>
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={routes.SIGN_IN}>Sign In</Link>
    </li>
    <li>
      <Link to={routes.SWIPE}>Swipe</Link>
    </li>
  </ul>
);

export default Navigation;
