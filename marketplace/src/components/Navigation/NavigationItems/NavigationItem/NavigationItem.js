import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.css';

const navigationItem = props => (
  <li className={classes.NavigationItem} style={{ paddingTop: '1.7%' }}>
    <NavLink
      to={props.link}
      exact={props.exact}
      style={{
        textDecoration: 'none',
        color: 'black',
        background: 'none',
        fontWeight: 'normal'
      }}
    >
      {props.children}
    </NavLink>
  </li>
);

export default navigationItem;
