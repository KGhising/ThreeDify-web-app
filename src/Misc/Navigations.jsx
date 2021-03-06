import React from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';

import NavLink from '../Components/NavLink';
import {
  DASHBOARD_URL,
  RECONSTRUCTION_URL,
  EXPLORE_URL,
} from '../Constants/appUrls';

class Navigations extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavLink url={EXPLORE_URL}>Explore</NavLink>
        {this.props.isLoggedIn && (
          <React.Fragment>
            <NavLink url={DASHBOARD_URL}>Dashboard</NavLink>
            <NavLink url={RECONSTRUCTION_URL}>Re-construction</NavLink>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

Navigations.propTypes = {
  isLoggedIn: PropType.bool,
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
  };
};

export default connect(mapStateToProps, null)(Navigations);
