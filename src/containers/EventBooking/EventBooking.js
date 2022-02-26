import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import BookEvent from '../../components/BookEvent/BookEvent';

const eventBooking = (props) => {
  const history = useHistory();

  const handleMakePaymentClick = () => {
    history.push('/events');
  };

  const handleBookEventCancel = () => {
    history.push('/events');
  };
  return (
    <BookEvent
      eventData={props.eventData}
      bookingData={props.bookingData}
      handleBookEventCancel={handleBookEventCancel}
      handleMakePaymentClick={handleMakePaymentClick}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    eventData: state.bookEvent.eventData,
    bookingData: state.bookEvent.bookingData,
  };
};

export default connect(mapStateToProps)(eventBooking);
