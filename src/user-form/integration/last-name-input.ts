import { reflect } from "@effector/reflect";
import { combine } from "effector";

import { Input } from "../ui/input";
import { $isLastNameValid, $lastName, changeLastName } from "../model/name";
import { $hasBeenSubmitted } from "../model/user-form";

const $hasError = combine(
  [$hasBeenSubmitted, $isLastNameValid], 
  ([hasBeenSubmitted, isValid]) => hasBeenSubmitted ? !isValid : false 
);

export const LastNameInput =  reflect({
    view: Input,
    bind: {
      label: "Фамилия",
      name: "lastName",
      value: $lastName,
      onChange: (e) => changeLastName(e.target.value),
      hasError: $hasError,
      additionalMessage: $hasError.map((hasError) => hasError ? 'Введите фамилию' : '')
    }
})