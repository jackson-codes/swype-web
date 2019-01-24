import React from 'react';
import { Router, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-roboto';

import withSession from './session/withSession';
import IndividualSwipePage from './pages/IndividualSwipePage';

import * as routes from '../constants/routes';
import history from '../constants/history';
import GroupSwipePage from './pages/GroupSwipePage';
import GroupListPage from './pages/GroupListPage';
import GroupEditPage from './pages/GroupEditPage';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const App = ({ session, refetch }) => (
  <Router history={history}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Route
          exact
          path={routes.SWIPE}
          component={() => <IndividualSwipePage />}
        />
        <Route
          exact
          path={routes.GROUPS}
          component={() => <GroupListPage />}
        />
        <Route
          exact
          path={routes.GROUP_SWIPE}
          component={() => <GroupSwipePage/>}
        />
        <Route
          exact
          path={routes.GROUP_EDIT}
          component={() => <GroupEditPage />}
        />
      </div>
    </MuiThemeProvider>
  </Router>
);

export default withSession(App);
