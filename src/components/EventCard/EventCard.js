import React from 'react';
import './EventCard.scss';
import EventTitle from '../EventTitle/EventTitle';
import EventSubTitle from '../EventSubTitle/EventSubTitle';
import Button from '../Button/Button';

const eventCard = (props) => {
  const { cardImage, cardTitle, date, availableTicketsCount, eventIndex } =
    props;
  const bg_image_url = "url('" + cardImage + "')";
  const ticketsAvailable = () => {
    return `Tickets Available:
      <span class="ticket_count">${
        availableTicketsCount ? availableTicketsCount : 'N/A'
      }</span>`;
  };

  const handleBookEventClick = (eventIndex) => {
    if (availableTicketsCount) {
      props.onBookEventsClick(eventIndex);
    }
  };
  return (
    <div className="event_card">
      <div
        className="event_card_image_wrapper"
        style={{ backgroundImage: bg_image_url }}
      ></div>
      <div className="event_card_content_wrapper">
        <EventTitle cardTitle={cardTitle} />
        <div className="event_info">
          <EventSubTitle subTitle={date} />
          <EventSubTitle
            isDangerouslySetInnerHTML
            subTitle={ticketsAvailable()}
          />
        </div>
      </div>
      <Button
        buttonIcon={
          availableTicketsCount
            ? 'https://alvimurtaza.github.io/Interview-Front-end/images/l3-l4-engineer/book.png'
            : 'https://alvimurtaza.github.io/Interview-Front-end/images/l3-l4-engineer/sold-out.png'
        }
        buttonTitle={availableTicketsCount ? 'Book Event' : 'Sold Out'}
        handleBookEventClick={handleBookEventClick}
        eventIndex={eventIndex}
        customClassName={availableTicketsCount ? '' : 'disabled'}
      />
    </div>
  );
};

export default eventCard;
