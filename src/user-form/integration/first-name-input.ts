import { reflect } from "@effector/reflect";
import { combine } from "effector";

import { Input } from "../ui/input";
import { $firstName, $isFirstNameValid, changeFirstName } from "../model/name";
import { $hasBeenSubmitted } from "../model/user-form";

const $hasError = combine(
  [$hasBeenSubmitted, $isFirstNameValid], 
  ([hasBeenSubmitted, isValid]) => hasBeenSubmitted ? !isValid : false 
);

export const FirstNameInput =  reflect({
    view: Input,
    bind: {
      label: "Имя",
      name: "name",
      value: $firstName,
      onChange: (e) => changeFirstName(e.target.value),
      hasError: $hasError,
      additionalMessage: $hasError.map((hasError) => hasError ? 'Введите имя' : '')
    }
})