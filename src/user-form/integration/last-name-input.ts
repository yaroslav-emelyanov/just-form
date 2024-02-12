import { reflect } from "@effector/reflect";

import { Input } from "../ui/input";
import { $lastName, changeLastName } from "../model/name";

export const LastNameInput =  reflect({
    view: Input,
    bind: {
      label: "Фамилия",
      name: "lastName",
      value: $lastName,
      onChange: (e) => changeLastName(e.target.value)
    }
})