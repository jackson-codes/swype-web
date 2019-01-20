import React from 'react';
import { Router, Route } from 'react-router-dom';

import Navigation from './navigation/Navigation';
import SignUpPage from './auth/SignUp';
import SignInPage from './auth/SignIn';
import withSession from './session/withSession';
import IndividualSwipePage from './pages/IndividualSwipePage';

import * as routes from '../constants/routes';
import history from '../constants/history';

const App = ({ session, refetch }) => (
  <Router history={history}>
    <div>
      <Navigation session={session} />

      <hr />

      <Route
        exact
        path={routes.SWIPE}
        component={() => <IndividualSwipePage />}
      />
      <Route
        exact
        path={routes.SIGN_UP}
        component={() => <SignUpPage refetch={refetch} />}
      />
      <Route
        exact
        path={routes.SIGN_IN}
        component={() => <SignInPage refetch={refetch} />}
      />
    </div>
  </Router>
);

export default withSession(App);
