import React from "react";
import UseInput from "../hooks/use-input";

const BasicForm = () => {
  const {
    value: firstNameValue,
    isValue: firstNameIsValue,
    hasError: firstNameError,
    valueChangeHandler: nameChangeHandler,
    inputBulurHandler: nameChangeBulur,
    reset: resetNameInput,
  } = UseInput((value) => value.trim() !== "");
  const {
    value: lastNameValue,
    isValue: lastNameIsValue,
    hasError: lastNameError,
    valueChangeHandler: lastNameChangeHandler,
    inputBulurHandler: lastNameChangeBulur,
    reset: resetLastNameInput,
  } = UseInput((value) => value.trim() !== "");
  const {
    value: emailValue,
    isValue: emailIsValue,
    hasError: emailError,
    valueChangeHandler: emailChangeHandler,
    inputBulurHandler: emailChangeBulur,
    reset: resetEmailInput,
  } = UseInput((value) => value.includes("@"));

  let formIsValid = false;

  if (firstNameIsValue && lastNameIsValue && emailIsValue) {
    formIsValid = true;
  }
  const submitChangeHandler = (event) => {
    event.preventdefault();
    if (!formIsValid) {
      return;
    }
    resetNameInput();
    resetEmailInput();
    resetLastNameInput();
  };

  const nameInputClasses = firstNameError
    ? " form-control invalid"
    : " form-control";
  const lastNameInputClasses = lastNameError
    ? " form-control invalid"
    : " form-control";
  const emailInputClasses = emailError
    ? " form-control invalid"
    : " form-control";
  return (
    <form onSubmit={submitChangeHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            onBlur={nameChangeBulur}
            value={firstNameValue}
          />
          {firstNameError && (
            <p className="error-text">Name input value bush</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameChangeBulur}
          />
          {lastNameError && <p className="error-text">Lastname input bush</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailChangeBulur}
        />
        {emailError && <p className="error-text">Email input bush</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
