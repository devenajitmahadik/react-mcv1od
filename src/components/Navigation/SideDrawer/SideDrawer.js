import React from 'react';
import Backdrop from '../../Backdrop/Backdrop';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.scss';

const sideDrawer = (props) => {
  return (
    <div className="side_drawer_wrapper">
      <Backdrop show={props.open} />
      <div className={'side_drawer ' + (props.open ? 'open' : 'close')}>
        <div className="side_drawer_logo">
          <Logo />
          <img
            className="side_drawer_close"
            src="https://alvimurtaza.github.io/Interview-Front-end/images/l3-l4-engineer/close.png"
            alt="Close"
            onClick={props.closed}
          />
        </div>
        <nav className="desktop_only">
          <NavigationItems />
        </nav>
      </div>
    </div>
  );
};

export default sideDrawer;
