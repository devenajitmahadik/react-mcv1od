import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './BookEventForm.scss';
import EventTitle from '../EventTitle/EventTitle';
import EventSubTitle from '../EventSubTitle/EventSubTitle';
import Input from '../Input/Input';
import Button from '../Button/Button';
import * as actions from '../../store/actions/index';
import { updateObject } from '../../shared/utility';

const bookEventForm = (props) => {
  const { eventData, onBookTicketsClick, onBookEventCancleClick, bookingData } =
    props;
  const dispatch = useDispatch();

  const [name, setName] = useState(bookingData.name);
  const [email, setEmail] = useState(bookingData.email);
  const [mobile, setMobile] = useState(bookingData.mobile);
  const [attendees, setAttendees] = useState(bookingData.attendees);

  const ticketsAvailable = () => {
    return `Tickets Available:
      <span class="ticket_count">${
        eventData.availableTicketsCount
          ? eventData.availableTicketsCount
          : 'N/A'
      }</span>`;
  };

  const onNameInputChange = (event) => {
    const updatedName = {
      value: event.target.value,
      isError: false,
      errorMessage: '',
    };
    setName(updateObject(name, updatedName));
  };

  const onEmailInputChange = (event) => {
    const updatedEmail = {
      value: event.target.value,
      isError: false,
      errorMessage: '',
    };
    setEmail(updateObject(email, updatedEmail));
  };

  const onMobileInputChange = (event) => {
    const updatedMobile = {
      value: event.target.value,
      isError: false,
      errorMessage: '',
    };
    setMobile(updateObject(mobile, updatedMobile));
  };

  const onAttendeeInputChange = (event, index) => {
    const newAttendees = JSON.parse(JSON.stringify(attendees));
    newAttendees[index].value = event.target.value;
    newAttendees[index].isError = false;
    newAttendees[index].errorMessage = '';
    setAttendees(newAttendees);
  };

  const handleAddAttendeeClick = () => {
    const newAttendees = [...attendees];
    newAttendees.push({
      value: '',
      isError: false,
      errorMessage: '',
      regExp: /^[a-zA-Z\s]*$/,
    });
    setAttendees(newAttendees);
  };

  const validateBookingData = () => {
    let isBookingDataValid = true;
    if (name.value === '') {
      setName(
        updateObject(name, {
          isError: true,
          errorMessage: 'Please enter your name',
        })
      );
      isBookingDataValid = false;
    } else if (!name.regExp.test(name.value)) {
      setName(
        updateObject(name, {
          isError: true,
          errorMessage: 'Only letters and spaces are allowed',
        })
      );
      isBookingDataValid = false;
    }
    if (email.value === '') {
      setEmail(
        updateObject(email, {
          isError: true,
          errorMessage: 'Please enter your email',
        })
      );
      isBookingDataValid = false;
    } else if (!email.regExp.test(email.value)) {
      setEmail(
        updateObject(email, {
          isError: true,
          errorMessage: 'Invalid email',
        })
      );
      isBookingDataValid = false;
    }
    if (mobile.value === '') {
      setMobile(
        updateObject(mobile, {
          isError: true,
          errorMessage: 'Please enter your mobile number',
        })
      );
      isBookingDataValid = false;
    } else if (!mobile.regExp.test(mobile.value)) {
      setMobile(
        updateObject(mobile, {
          isError: true,
          errorMessage: 'Invalid mobile number',
        })
      );
      isBookingDataValid = false;
    }

    const attendeesCopy = JSON.parse(JSON.stringify(attendees));
    attendeesCopy.map((attendee, index) => {
      attendee.regExp = /^[a-zA-Z\s]*$/;
      if (attendee.value === '') {
        attendee.isError = true;
        attendee.errorMessage = 'Please enter your name';
        isBookingDataValid = false;
      } else if (!attendee.regExp.test(attendee.value)) {
        attendee.isError = true;
        attendee.errorMessage = 'Only letters and spaces are allowed';
        isBookingDataValid = false;
      }
    });

    console.log('Old attendees: ', attendees);
    console.log('New attendees: ', attendeesCopy);
    setAttendees(attendeesCopy);

    return isBookingDataValid;
  };

  const handleBookTicketsClick = () => {
    const isBookingDataValid = validateBookingData();
    if (isBookingDataValid) {
      dispatch(
        actions.setBookingData({
          name: name,
          email: email,
          mobile: mobile,
          attendees: attendees,
        })
      );
      onBookTicketsClick({
        ticketsCount: attendees.length,
        eventTitle: eventData.cardTitle,
        eventDate: eventData.date,
      });
    }
  };

  const handleCancelClick = () => {
    dispatch(actions.clearBookingData());
    onBookEventCancleClick();
  };

  return (
    <div className="book_event_form event_form">
      <div className="book_event_header event_form_header">
        <EventTitle cardTitle={eventData.cardTitle} />
        <EventSubTitle subTitle={eventData.date} />
        <EventSubTitle
          isDangerouslySetInnerHTML
          subTitle={ticketsAvailable()}
        />
      </div>
      <div className="book_event_body event_form_body">
        <EventSubTitle customClassName="input_label" subTitle="Name" />
        <Input
          inputType="text"
          isRequired={true}
          handleOnChange={onNameInputChange}
          placeHolder="First Name Last Name"
          value={name.value}
          isError={name.isError}
          errorMessage={name.errorMessage}
        />
        <EventSubTitle customClassName="input_label" subTitle="Email" />
        <Input
          inputType="email"
          isRequired={true}
          handleOnChange={onEmailInputChange}
          placeHolder="username@domain.com"
          value={email.value}
          isError={email.isError}
          errorMessage={email.errorMessage}
        />
        <EventSubTitle customClassName="input_label" subTitle="Mobile" />
        <Input
          inputType="text"
          isRequired={true}
          handleOnChange={onMobileInputChange}
          placeHolder="+91 XXX XXX XXXX"
          value={mobile.value}
          isError={mobile.isError}
          errorMessage={mobile.errorMessage}
        />
        <EventSubTitle customClassName="input_label" subTitle="Attendees" />
        <div className="attendees_wrapper">
          {attendees &&
            attendees.map((attendee, index) => {
              return (
                <div
                  key={'attendee_wrapper-' + index}
                  className="attendee_wrapper"
                >
                  <EventTitle
                    customClassName="attendee_index"
                    cardTitle={index + 1}
                  />
                  <Input
                    inputType="text"
                    isRequired={true}
                    handleOnChange={onAttendeeInputChange}
                    placeHolder="First Name Last Name"
                    inputIndex={index}
                    value={attendee.value}
                    isError={attendee.isError}
                    errorMessage={attendee.errorMessage}
                  />
                </div>
              );
            })}
        </div>
        <div className="add_attendee_wrapper">
          <Button
            buttonIcon="https://alvimurtaza.github.io/Interview-Front-end/images/l3-l4-engineer/add.png"
            buttonTitle="Add an Attendee"
            handleBookEventClick={handleAddAttendeeClick}
            customClassName="no_border "
          />
        </div>
      </div>
      <div className="book_event_footer event_form_footer">
        <Button
          buttonTitle="Book Tickets"
          handleBookEventClick={handleBookTicketsClick}
          customClassName="bg_dark"
        />
        <Button
          buttonTitle="Cancel"
          handleBookEventClick={handleCancelClick}
          customClassName=""
        />
      </div>
    </div>
  );
};

export default bookEventForm;
