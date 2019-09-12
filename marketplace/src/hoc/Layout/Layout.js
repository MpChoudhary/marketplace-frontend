import React, { Component } from 'react';
import { connect } from 'react-redux';

import ClassAux from '../ClassAux/ClassAux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

class Layout extends Component {
  render() {
    return (
      <ClassAux>
        <Toolbar isAuth={this.props.isAuthenticated} />
        <main className={classes.Content}>{this.props.children}</main>
      </ClassAux>
    );
  }
}

const mapStateToProps = state => {
  // console.log('=============' + state.auth.isAuthenticated);
  return {
    isAuthenticated: state.auth.token !== null
  };
};

export default connect(mapStateToProps)(Layout);
