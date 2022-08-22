import { useState } from "react";

const UseInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValue = validateValue(enteredValue);
  const hasError = !valueIsValue && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };
  const inputBulurHandler = (event) => {
    setIsTouched(true);
  };
  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };
  return {
    value: enteredValue,
    isValue: validateValue,
    hasError,
    valueChangeHandler,
    inputBulurHandler,
    reset,
  };
};

export default UseInput;
