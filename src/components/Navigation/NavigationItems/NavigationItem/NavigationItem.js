import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationItem.scss';

const navigationItem = (props) => {
  return (
    <li className="navigation_item">
      <NavLink
        to={props.link}
        exact={props.exact}
        activeClassName="navigation_item_active"
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default navigationItem;
