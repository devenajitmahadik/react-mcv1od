import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as actions from '../../store/actions/index';
import EventList from '../../components/EventList/EventList';
import Header from '../../components/Header/Header';

const eventListing = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const onInitEventListing = useCallback(
    () => dispatch(actions.fetchEvents()),
    [dispatch]
  );

  useEffect(() => {
    onInitEventListing();
  }, [onInitEventListing]);

  const handleBookEventClick = (index) => {
    dispatch(actions.setSelectedEvent(props.eventList[index]));
    history.push('/book-event');
  };

  return (
    <div>
      <Header />
      <EventList
        title="Events"
        eventList={props.eventList}
        handleBookEventClick={handleBookEventClick}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    eventList: state.eventListing.eventList,
  };
};

export default connect(mapStateToProps)(eventListing);
