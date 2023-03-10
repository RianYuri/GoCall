import { useState } from "react";



interface InputHook {
  value: string;
  isValid: boolean;
  hasError: boolean;
  valueChangedHandler: (event: React.ChangeEvent<HTMLInputElement> |  React.ChangeEvent<HTMLSelectElement>) => void;
  inputBlurHandler: (event: React.FocusEvent<HTMLInputElement> | React.FocusEvent<HTMLSelectElement> ) => void;
  formIsValid:() => void;
  resetInput: () => void;
}


const useInput = <T extends (...args: any[]) => boolean>(
  validateValue: T
): InputHook => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangedHandler = (event:  React.ChangeEvent<HTMLInputElement> |  React.ChangeEvent<HTMLSelectElement>) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };
  const formIsValid = () =>{
    setIsTouched(true);
  }

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
    formIsValid,
    resetInput,
  };
};

export default useInput;