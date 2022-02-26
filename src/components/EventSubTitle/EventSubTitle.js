import React from 'react';
import './EventSubTitle.scss';

const eventSubTitle = (props) => {
  return (
    <div>
      {props.isDangerouslySetInnerHTML ? (
        <div
          className={
            'event_card_sub_title ' +
            (props.customClassName ? props.customClassName : '')
          }
          dangerouslySetInnerHTML={{ __html: props.subTitle }}
        ></div>
      ) : (
        <div
          className={
            'event_card_sub_title ' +
            (props.customClassName ? props.customClassName : '')
          }
        >
          {props.subTitle}
        </div>
      )}
    </div>
  );
};

export default eventSubTitle;
