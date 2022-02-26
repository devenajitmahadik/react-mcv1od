import * as actionTypes from './actionTypes';

export const updateSelectedEvent = (eventData) => {
  return {
    type: actionTypes.SET_SELECTED_EVENT,
    eventData: eventData,
  };
};

export const updateBookingData = (bookingData) => {
  return {
    type: actionTypes.SET_BOOKING_DATA,
    bookingData: bookingData,
  };
};

export const resetBookingData = () => {
  return {
    type: actionTypes.CLEAR_BOOKING_DATA,
  };
};

export const setSelectedEvent = (eventData) => {
  return (dispatch) => {
    dispatch(updateSelectedEvent(eventData));
  };
};

export const setBookingData = (bookingData) => {
  return (dispatch) => {
    dispatch(updateBookingData(bookingData));
  };
};

export const clearBookingData = () => {
  return (dispatch) => {
    dispatch(resetBookingData());
  };
};
