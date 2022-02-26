import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  eventList: [],
};

const setEventListing = (state, action) => {
  return updateObject(state, {
    eventList: action.eventList,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_EVENTS_START:
      return state;
    case actionTypes.FETCH_EVENTS_SUCCESS:
      return state;
    case actionTypes.FETCH_EVENTS_FAILED:
      return state;
    case actionTypes.SET_EVENT_LISTS:
      return setEventListing(state, action);
    default:
      return state;
  }
};

export default reducer;
