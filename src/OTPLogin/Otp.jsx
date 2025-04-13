import React, { useState } from "react";
import styles from "./otp.module.css";

const Otp = ({ size = 6 }) => {
  const [inputValues, setInputValues] = useState(() =>
    new Array(size).fill("")
  );

  const focusNext = (currentInput) => {
    currentInput?.nextElementSibling?.focus();
  };

  const focusNextToNext = (currentInput) => {
    if (currentInput?.nextElementSibling?.nextElementSibling) {
      currentInput?.nextElementSibling?.nextElementSibling.focus();
    } else {
      focusNext(currentInput);
    }
  };

  const focusPrevious = (inputElement) => {
    if (inputElement?.previousElementSibling) {
      inputElement.previousElementSibling.focus();
    } else {
      inputElement.focus();
    }
  };

  const handleNumericInput = (event) => {
    const inputValue = Number(event.key);
    if (isNaN(inputValue)) return;

    const inputElement = event.target;
    const inputIndex = Number(event.target.id);
    console.log(inputIndex);

    if (inputValues[inputIndex].length === 0) {
      //no digit present in the input
      setInputValues((prev) => {
        const newValues = [...prev];
        newValues[inputIndex] = inputValue.toString();
        return newValues;
      });
      focusNext(inputElement);
    } else {
      //when there is a digit in the current input
      const cursorIndex = inputElement.selectionStart;
      console.log(cursorIndex);
      if (cursorIndex === 0) {
        setInputValues((prev) => {
          const newValues = [...prev];
          if (inputIndex < size - 1) {
            newValues[inputIndex + 1] = prev[inputIndex];
          }
          newValues[inputIndex] = inputValue.toString();

          return newValues;
        });
        focusNextToNext(inputElement);
      } else if (inputIndex + 1 < size) {
        setInputValues((prev) => {
          const newValues = [...prev];
          newValues[inputIndex + 1] = inputValue;
          return newValues;
        });
        focusNextToNext(inputElement);
      }
    }
  };

  //handling backSpaces
  const handleBackSpace = (event) => {
    if (event.key === "Backspace") {
      let inputIndex = Number(event.target.id);
      let inputElement = event.target;
      setInputValues((prev) => {
        let newValues = [...prev];
        newValues[inputIndex] = "";
        return newValues;
      });
      focusPrevious(inputElement);
    }
  };

  const onKeyUp = (event) => {
    handleNumericInput(event);
    handleBackSpace(event);
  };
  return (
    <div className={styles.container}>
      <h1>OTP Verification</h1>
      <div className={styles.inputContainer}>
        {inputValues.map((inputValue, index) => (
          <input
            key={index.toString()}
            className={styles.input}
            onKeyUp={onKeyUp}
            id={index.toString()}
            maxLength={1}
            value={inputValue}
          />
        ))}
      </div>
    </div>
  );
};

export default Otp;
