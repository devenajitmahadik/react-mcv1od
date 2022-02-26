import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import './Toolbar.scss';

const toolbar = (props) => {
  return (
    <header className="toobar">
      <div className="toolbar_logo">
        <Logo />
      </div>
      <nav className="desktop_only">
        <NavigationItems />
      </nav>
      <DrawerToggle clicked={props.drawerToggleClicked} />
    </header>
  );
};

export default toolbar;
