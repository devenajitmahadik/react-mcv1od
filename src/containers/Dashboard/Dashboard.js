import React from 'react';
import Header from '../../components/Header/Header';
import EventTitle from '../../components/EventTitle/EventTitle';

const dashboard = () => {
  return (
    <div>
      <Header />
      <EventTitle cardTitle="Welcome to Dashboard! Please visit 'Events'" />
    </div>
  );
};

export default dashboard;
