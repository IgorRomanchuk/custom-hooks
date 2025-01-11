import { useEffect, useState } from "react";
import { IValidation } from "./useInput.ts";

function useValidation(value: string, validations: IValidation) {
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [minLengthError, setMinLengthError] = useState<boolean>(false);

  useEffect(() => {
    for (let key in validations) {
      switch (key) {
        case "minLength":
          value.length < validations[key] ? setMinLengthError(true) : setMinLengthError(false);
          break;
        case "isEmpty":
          console.log(key);
          validations[key] ? setIsEmpty(true) : setIsEmpty(false);
          break;
      }
    }
  }, [value]);

  return {
    isEmpty,
    minLengthError,
  };
}

export default useValidation;
