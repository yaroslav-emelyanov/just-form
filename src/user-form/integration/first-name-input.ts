import { reflect } from "@effector/reflect";

import { Input } from "../ui/input";
import { $firstName, changeFirstName } from "../model/name";

export const FirstNameInput =  reflect({
    view: Input,
    bind: {
      label: "Имя",
      name: "name",
      value: $firstName,
      onChange: (e) => changeFirstName(e.target.value)
    }
})