import React from 'react';
import './Input.scss';

const input = (props) => {
  const {
    inputType,
    isRequired,
    placeHolder,
    inputIndex,
    value,
    isError,
    errorMessage,
  } = props;

  const handleOnChange = (event) => {
    props.handleOnChange(event, inputIndex);
  };

  return (
    <div className="input_wrapper">
      <input
        className="input"
        required={isRequired}
        type={inputType}
        onChange={handleOnChange}
        placeholder={placeHolder}
        value={value}
      />
      {isError && <div className="error">{errorMessage}</div>}
    </div>
  );
};

export default input;
