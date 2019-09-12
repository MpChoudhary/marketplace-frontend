import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import ClassAux from '../../../hoc/ClassAux/ClassAux';

const navigationItems = props => (
  <ul
    className={classes.NavigationItems}
    style={{ marginTop: '0px', marginBottom: '0px' }}
  >
    {/* <NavigationItem link="/" exact>Login</NavigationItem> */}
    {!props.isAuthenticated ? null : (
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
    {!props.isAuthenticated ? (
      <NavigationItem link="/signup">Signup</NavigationItem>
    ) : null}
  </ul>
);

export default navigationItems;
