import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './style.css';
import Dashboard from './containers/Dashboard/Dashboard';
import EventListing from './containers/EventListing/EventListing';
import EventBooking from './containers/EventBooking/EventBooking';

const app = (props) => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/events" exact component={EventListing} />
        <Route path="/book-event" exact component={EventBooking} />
        <Redirect to="/events" />
      </Switch>
    </div>
  );
};

export default app;
