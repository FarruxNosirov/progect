import React from "react";
import UseInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBulurHandler: nameBlurHandler,
    isValue: enteredNameIsValue,
    reset: resetNameInput,
  } = UseInput((value) => value.trim() !== "");
  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBulurHandler: emailBlurHandler,
    isValue: enteredEmailIsValue,
    reset: resetEmailInput,
  } = UseInput((value) => value.includes("@"));

  let formIsValid = false;
  if (enteredNameIsValue && enteredEmailIsValue) {
    formIsValid = true;
  }

  const formSubmitChangeHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValue) {
      return;
    }
    resetNameInput();

    if (!enteredEmailIsValue) {
      return;
    }
    resetEmailInput();
  };

  const nameInputCalasses = nameInputHasError
    ? "form-control invalid"
    : "form-control ";
  const emailInputCalasses = emailInputHasError
    ? "form-control invalid"
    : "form-control ";

  return (
    <form onSubmit={formSubmitChangeHandler}>
      <div className={nameInputCalasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangedHandler}
          value={enteredName}
          onBlur={nameBlurHandler}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be emoty</p>
        )}
      </div>
      <div className={emailInputCalasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="email"
          id="name"
          onChange={emailChangedHandler}
          value={enteredEmail}
          onBlur={emailBlurHandler}
        />
        {emailInputHasError && (
          <p className="error-text">Email must not be emoty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
