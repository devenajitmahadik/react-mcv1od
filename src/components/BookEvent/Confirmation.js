import React from 'react';
import './Confirmation.scss';
import EventTitle from '../EventTitle/EventTitle';
import EventSubTitle from '../EventSubTitle/EventSubTitle';
import Button from '../Button/Button';

const confirmation = (props) => {
  const { eventConfirmationData, onMakePaymentClick, onBackToBookingsClick } =
    props;

  const ticketsCount = eventConfirmationData.ticketsCount;

  return (
    <div className="confirmation_form event_form">
      <div className="confirmation_header event_form_header">
        <EventSubTitle
          isDangerouslySetInnerHTML
          subTitle={`You have booked 
            <span class="ticket_count">${ticketsCount}</span>
            <span class="bold">tickets</span>
             for`}
        />
      </div>
      <div className="confirmation_body event_form_body">
        <EventTitle cardTitle={eventConfirmationData.eventTitle} />
        <EventSubTitle subTitle={eventConfirmationData.eventDate} />
      </div>
      <div className="confirmation_footer event_form_footer">
        <Button
          buttonTitle="Make Payment"
          handleBookEventClick={onMakePaymentClick}
          customClassName="bg_dark"
        />
        <Button
          buttonTitle="Back To Bookings"
          handleBookEventClick={onBackToBookingsClick}
          customClassName=""
        />
      </div>
    </div>
  );
};

export default confirmation;
