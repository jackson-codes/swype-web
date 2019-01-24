import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonBase, Divider } from '@material-ui/core';
import {
  faArrowLeft,
  faBars,
  faSignOutAlt,
  faKey,
  faBalanceScale,
} from '@fortawesome/free-solid-svg-icons';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Fab from '@material-ui/core/Fab';

import Tabs from './Tabs';

const styles = theme => ({
  toolbarContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    alignItems: 'stretch'
  },
  toolbarItem: {
    position: 'relative',
    flex: 1,
    display: 'flex',
    alignItems: 'center'
  },
  rightButton: {
    position: 'absolute',
    top: 0,
    right: 0
  }
});

class NavBar extends React.Component {
  state = {
    drawerOpen: false
  };

  render() {
    const {
      showTabs,
      tabSelected,
      title,
      leftIcon,
      leftIconShowsMenu,
      leftIconAction,
      classes,
      rightButtonIcon
    } = this.props;
    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <div className={classes.toolbarContainer}>
            <div className={classes.toolbarItem}>
              <div>
                <ButtonBase
                  onClick={() => {
                    if (leftIconShowsMenu) {
                      this.setState({ drawerOpen: true });
                    } else if (leftIconAction) {
                      leftIconAction();
                    }
                  }}
                >
                  <FontAwesomeIcon icon={leftIcon === 'arrow' ? faArrowLeft : faBars} size="lg" />
                </ButtonBase>
              </div>
            </div>
            {showTabs && <div><Tabs tabSelected={tabSelected} /></div>}
            <div className={classes.toolbarItem} style={{ justifyContent: 'flex-end' }}>
              <Fab color="#92CBC5" aria-label="Add" className={classes.rightButton}>
                <FontAwesomeIcon icon={rightButtonIcon} size="lg" />
              </Fab>
            </div>
          </div>
        </Toolbar>

        {/* App Drawer */}
        <SwipeableDrawer
          open={this.state.drawerOpen}
          onOpen={() => this.setState({ drawerOpen: true } )}
          onClose={() => this.setState({ drawerOpen: false } )}
        >
          <List>
            <ListItem>
              <ListItemIcon>
                <FontAwesomeIcon icon={faBalanceScale} />
              </ListItemIcon>
              <ListItemText primary="Terms of Service" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FontAwesomeIcon icon={faKey} />
              </ListItemIcon>
              <ListItemText primary="Change Password" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem>
              <ListItemIcon>
                <FontAwesomeIcon icon={faSignOutAlt} />
              </ListItemIcon>
              <ListItemText primary="Log Out" />
            </ListItem>
          </List>
        </SwipeableDrawer>
      </AppBar>
    );
  }
}

NavBar.defaultProps = {
  leftIcon: 'hamburger',
  leftIconShowsMenu: true,
  showTabs: true,
  tabSelected: 'individual',
};

NavBar.propTypes = {
  leftIcon: PropTypes.oneOf(['arrow','hamburger']),
  leftIconShowsMenu: PropTypes.bool,
  leftIconAction: PropTypes.func,
  title: PropTypes.element,
  showTabs: PropTypes.bool,
  tabSelected: PropTypes.oneOf('individual', 'group'),
  rightButtonIcon: PropTypes.element,
  rightButtonAction: PropTypes.func,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);
