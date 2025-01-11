import { useState } from "react";
import useValidation from "./useValidation.ts";
import * as React from "react";

export interface IValidation {
  isEmpty: boolean;
  minLength: number;
}

const useInput = (initialValue: string, validation: IValidation) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setIsDirty] = useState<boolean>(false);

  const { isEmpty, minLengthError } = useValidation(value, validation);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onBlur = () => {
    setIsDirty(true);
  };

  return {
    value,
    isDirty,
    onChange,
    onBlur,
    isEmpty,
    minLengthError,
  };
};

export default useInput;
