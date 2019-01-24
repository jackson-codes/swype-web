import React from 'react';
import PropTypes from 'prop-types';
import ButtonBase from '@material-ui/core/ButtonBase';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const styles = theme => ({
  tab: {
    backgroundColor: '#303030',
    height: '36px',
    width: '48px'
  },
  tabLeft: {
    borderTopLeftRadius: '18px',
    borderBottomLeftRadius: '18px'
  },
  tabRight: {
    borderTopRightRadius: '18px',
    borderBottomRightRadius: '18px'
  },
  tabSelected: {
    backgroundColor: '#92CBC5',
    color: '#000'
  }
});

const Tabs = ({
  classes,
  tabSelected
}) => (
  <Grid container>
    <ButtonBase 
      className={classNames(
        classes.tab,
        classes.tabLeft,
        { [classes.tabSelected]: tabSelected === 'individual' }
      )}
      focusRipple
      component={Link}
      to="/"
    >
      <FontAwesomeIcon icon={faUser} />
    </ButtonBase>
    <ButtonBase 
      className={classNames(
        classes.tab,
        classes.tabRight,
        { [classes.tabSelected]: tabSelected === 'group' }
      )}
      focusRipple
      component={Link}
      to="/groups"
    >
      <FontAwesomeIcon icon={faUsers} />
    </ButtonBase>
  </Grid>
);

Tabs.propTypes = {
  classes: PropTypes.object.isRequired,
  tabSelected: PropTypes.oneOf('individual', 'group'),
};

export default withStyles(styles)(Tabs);
