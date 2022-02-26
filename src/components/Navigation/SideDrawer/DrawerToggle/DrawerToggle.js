import React from 'react';
import './DrawerToggle.scss';

const drawerToggle = (props) => {
  return (
    <div className="drawer_toggle" onClick={props.clicked}>
      <img
        src="https://alvimurtaza.github.io/Interview-Front-end/images/l3-l4-engineer/hamburger.png"
        alt="hamburger"
      />
    </div>
  );
};

export default drawerToggle;
