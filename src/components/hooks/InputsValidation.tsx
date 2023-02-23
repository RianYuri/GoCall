import { useState } from "react";

interface InputHook {
  value: string;
  isValid: boolean;
  hasError: boolean;
  valueChangedHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputBlurHandler: (event: React.FocusEvent<HTMLInputElement>) => void;
  resetInput: () => void;
}

const useInput = <T extends (...args: any[]) => boolean>(
  validateValue: T
): InputHook => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const resetInput = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangedHandler,
    inputBlurHandler,
    resetInput,
  };
};

export default useInput;