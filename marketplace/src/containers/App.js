import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import Layout from '../hoc/Layout/Layout';
import Auth from '../containers/Auth/Auth';
import Signup from '../containers/Signup/Signup';
import Search from './Search/Search';
import Logout from '../containers/Auth/Logout/Logout';
import Compare from '../components/Compare/Compare';
import Detail from '../components/Detail/Detail';
import Products from './Products/Products';
import * as actions from '../store/actions/index';

import './App.css';

class App extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.onTryAutoSignup();
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/signup" component={Signup} />
        <Redirect to="/auth" />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/logout" component={Logout} />
          <Route path="/search" exact component={Search} />
          <Route path="/products" exact component={Products} />
          <Route path={'/products/compare'} exact component={Compare} />
          <Route path={'/products/:id'} exact component={Detail} />
          <Redirect to="/search" />
        </Switch>
      );
    }

    return (
      <div className="App" style={{ height: '100vh' }}>
        <Layout>{routes}</Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
