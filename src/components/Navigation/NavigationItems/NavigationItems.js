import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.scss';
import EventSubTitle from '../../EventSubTitle/EventSubTitle';

const navigationItems = (props) => {
  return (
    <ul className="navigation_items">
      <NavigationItem link="/" exact>
        <EventSubTitle subTitle="Dashboard" />
      </NavigationItem>
      <NavigationItem link="/events" exact>
        <EventSubTitle subTitle="Events" />
      </NavigationItem>
      <NavigationItem link="/help" exact>
        <EventSubTitle subTitle="Help" />
      </NavigationItem>
      <NavigationItem link="/logout" exact>
        <EventSubTitle subTitle="Logout" />
      </NavigationItem>
    </ul>
  );
};

export default navigationItems;
