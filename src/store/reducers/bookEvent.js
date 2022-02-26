import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  eventData: {
    cardTitle: '',
    date: '',
    availableTicketsCount: 0,
  },
  bookingData: {
    name: {
      value: '',
      isError: false,
      errorMessage: '',
      regExp: /^[a-zA-Z\s]*$/,
    },
    email: {
      value: '',
      isError: false,
      errorMessage: '',
      regExp:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    },
    mobile: {
      value: '',
      isError: false,
      errorMessage: '',
      regExp: /^(\+\d{1,3}[- ]?)?\d{10}$/,
    },
    attendees: [
      {
        value: '',
        isError: false,
        errorMessage: '',
        regExp: /^[a-zA-Z\s]*$/,
      },
    ],
  },
};

const setSelectedEvent = (state, action) => {
  return updateObject(state, {
    eventData: action.eventData,
  });
};

const setBookingData = (state, action) => {
  return updateObject(state, {
    bookingData: action.bookingData,
  });
};

const clearBookingData = (state) => {
  return updateObject(state, {
    bookingData: {
      name: '',
      email: '',
      mobile: '',
      attendees: [''],
    },
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SELECTED_EVENT:
      return setSelectedEvent(state, action);
    case actionTypes.SET_BOOKING_DATA:
      return setBookingData(state, action);
    case actionTypes.CLEAR_BOOKING_DATA:
      return clearBookingData(state);
    default:
      return state;
  }
};

export default reducer;
