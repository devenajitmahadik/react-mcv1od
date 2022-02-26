import React, { useState, useEffect } from 'react';
import './EventList.scss';
import EventCard from '../EventCard/EventCard';
import EventSubTitle from '../EventSubTitle/EventSubTitle';
import Input from '../Input/Input';

const eventList = (props) => {
  const [searchValue, setSearchValue] = useState('');
  const [eventList, setEventList] = useState(props.eventList);
  const [stateToggle, setStateToggle] = useState(true);

  useEffect(() => {
    if (searchValue !== '') {
      let filteredList = props.eventList.filter((event) => {
        return (
          event.cardTitle.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
        );
      });
      setEventList(filteredList);
    } else {
      setEventList(props.eventList);
    }
  });

  const handleBookEventClick = (index) => {
    props.handleBookEventClick(index);
  };

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
    setStateToggle(!stateToggle);
  };

  const getFilteredList = () => {};

  return (
    <div className="event_list_page">
      <div className="search_input_wrapper">
        <div className="search_input_inner_wrapper">
          <Input
            inputType="text"
            isRequired={false}
            handleOnChange={handleSearchInputChange}
            placeHolder="Search by event Title ..."
          />
          <img
            className="search_icon"
            src="https://alvimurtaza.github.io/Interview-Front-end/images/l3-l4-engineer/search.png"
            alt="Search Iocn"
          />
        </div>
      </div>
      <div className="event_list">
        <div className="event_page_title">
          {props.title}:(
          {eventList.length})
        </div>
        <div className="event_list_wrapper">
          {eventList.length ? (
            eventList.map((event, index) => {
              return (
                <EventCard
                  key={event.id}
                  cardImage={event.cardImage}
                  cardTitle={event.cardTitle}
                  date={event.date}
                  availableTicketsCount={event.availableTicketsCount}
                  id={event.id}
                  eventIndex={index}
                  onBookEventsClick={handleBookEventClick}
                />
              );
            })
          ) : (
            <EventSubTitle subTitle="No results found!" />
          )}
        </div>
      </div>
    </div>
  );
};

export default eventList;
