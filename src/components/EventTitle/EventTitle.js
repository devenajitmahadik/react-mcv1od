import React from 'react';
import './EventTitle.scss';

const eventTitle = (props) => {
  const { customClassName } = props;
  return (
    <div
      className={'event_card_title ' + (customClassName ? customClassName : '')}
    >
      {props.cardTitle}
    </div>
  );
};

export default eventTitle;
