import React, { useState } from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import './Header.scss';

const header = (props) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerCloseHandler = () => {
    setShowSideDrawer(false);
  };

  const handleSideDrawerToggle = () => {
    setShowSideDrawer((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  return (
    <div className="header_wrapper">
      <Toolbar drawerToggleClicked={handleSideDrawerToggle} />
      <SideDrawer open={showSideDrawer} closed={sideDrawerCloseHandler} />
    </div>
  );
};

export default header;
