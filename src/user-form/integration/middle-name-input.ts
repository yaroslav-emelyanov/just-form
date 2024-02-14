import { reflect } from "@effector/reflect";
import { combine } from "effector";

import { Input } from "../ui/input";
import { $isMiddleNameValid, $middleName, changeMiddleName } from "../model/name";
import { $hasBeenSubmitted } from "../model/user-form";

const $hasError = combine(
  [$hasBeenSubmitted, $isMiddleNameValid], 
  ([hasBeenSubmitted, isValid]) => hasBeenSubmitted ? !isValid : false 
);

export const MiddleNameInput =  reflect({
    view: Input,
    bind: {
      label: "Отчество",
      name: "middleName",
      value: $middleName,
      onChange: (e) => changeMiddleName(e.target.value),
      hasError: $hasError,
      additionalMessage: $hasError.map((hasError) => hasError ? 'Введите отчество' : '')
    }
})