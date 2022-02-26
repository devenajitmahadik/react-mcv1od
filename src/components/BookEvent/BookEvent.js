import React, { useState } from 'react';
import './BookEvent.scss';
import BookEventForm from './BookEventForm';
import Confirmation from './Confirmation';

const bookEvent = (props) => {
  const { eventData, bookingData } = props;

  const [eventConfirmationData, setEventConfirmationData] = useState(null);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const handleBookTicketsClick = (ticketsData) => {
    setEventConfirmationData(ticketsData);
    setIsConfirmationModalOpen(true);
  };

  const handleCancelClick = () => {
    props.handleBookEventCancel();
  };

  const handleMakePaymentClick = () => {
    props.handleMakePaymentClick();
  };

  const handleBackToBookingsClick = () => {
    setEventConfirmationData(null);
    setIsConfirmationModalOpen(false);
  };

  return (
    <div className="book_event_wrapper">
      {isConfirmationModalOpen ? (
        <Confirmation
          eventConfirmationData={eventConfirmationData}
          onMakePaymentClick={handleMakePaymentClick}
          onBackToBookingsClick={handleBackToBookingsClick}
        />
      ) : (
        <BookEventForm
          eventData={eventData}
          onBookTicketsClick={handleBookTicketsClick}
          onBookEventCancleClick={handleCancelClick}
          bookingData={bookingData}
        />
      )}
    </div>
  );
};

export default bookEvent;
