import React from 'react';
import './Button.scss';

const button = (props) => {
  const { buttonIcon, buttonTitle, eventIndex, customClassName } = props;

  const handleBookEventClick = (data) => {
    if (props.handleBookEventClick) {
      props.handleBookEventClick(data);
    }
  };
  return (
    <div
      className={
        'event_card_cta_wrapper ' + (customClassName ? customClassName : '')
      }
      onClick={() => handleBookEventClick(eventIndex)}
    >
      {buttonIcon ? <img src={buttonIcon} alt={buttonTitle} /> : null}
      <div className="cta_title">{buttonTitle}</div>
    </div>
  );
};

export default button;
