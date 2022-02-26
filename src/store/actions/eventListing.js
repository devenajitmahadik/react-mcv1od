import axios from 'axios';
import * as actionTypes from './actionTypes';

export const setEventList = (eventList) => {
  return {
    type: actionTypes.SET_EVENT_LISTS,
    eventList: eventList,
  };
};

export const fetchEvents = () => {
  return (dispatch) => {
    axios
      .get('./data.json')
      .then((res) => {
        dispatch(setEventList(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
