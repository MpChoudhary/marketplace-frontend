import React from 'react';
import { connect } from 'react-redux';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import ClassAux from '../../../hoc/ClassAux/ClassAux';
import Logo from '../../../containers/Logo.png';

class navigationItems extends React.Component {
  render() {
    const { stateCategories } = this.props;
    const categories = [];
    for (let i in stateCategories) {
      categories.push({
        id: i,
        name: stateCategories[i].name
      });
    }

    let options = categories.map(category => (
      <option key={category.id}>{category.name}</option>
    ));
    return (
      <ul
        className={classes.NavigationItems}
        style={{ marginTop: '0px', marginBottom: '0px' }}
      >
        {/* <NavigationItem link="/" exact>Login</NavigationItem> */}
        {/*  */}
        {!this.props.isAuthenticated ? null : (
          <ClassAux>
            <li style={{ paddingTop: '1.2%' }}>
              <img
                src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png"
                alt="user"
                style={{ width: '38px', height: '38px' }}
              />
            </li>
            <NavigationItem link="/search">Projects</NavigationItem>
            <NavigationItem link="/logout">Logout</NavigationItem>
          </ClassAux>
        )}
        {this.props.isRedirect && this.props.isAuthenticated ? (
          <ClassAux>
            <li style={{ paddingTop: '1.2%', float: 'left' }}>
              <img
                style={{
                  width: '139px',
                  height: '50px'
                }}
                src={Logo}
                alt="logo"
              />
            </li>
            <li
              style={{ paddingTop: '1.6%', float: 'left', paddingLeft: '26vw' }}
            >
              <div>
                <div className="col input-container">
                  <div className="col-mx-3">
                    <select className="select_category">{options}</select>
                  </div>
                  {/* //  */}
                  <div className="arrow_down" id="search_arrow" />
                  <input
                    style={{ marginLeft: '113px', width: '78%', height: '75%' }}
                    placeholder="Search..."
                  />
                  <div className="arrow_down" id="input_arrow" />
                  <div>
                    <button className="input_logo" id="search_btn">
                      <i id="search_logo" className="fas fa-search" />
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ClassAux>
        ) : null}
        {!this.props.isAuthenticated ? (
          <NavigationItem link="/signup">Signup</NavigationItem>
        ) : null}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    isRedirect: state.redirect.redirect,
    isAuthenticated: state.auth.token !== null,
    stateCategories: state.categories.categories
  };
};
export default connect(
  mapStateToProps,
  null
)(navigationItems);
