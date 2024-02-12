import { reflect } from "@effector/reflect";

import { Input } from "../ui/input";
import { $middleName, changeMiddleName } from "../model/name";

export const MiddleNameInput =  reflect({
    view: Input,
    bind: {
      label: "Отчество",
      name: "middleName",
      value: $middleName,
      onChange: (e) => changeMiddleName(e.target.value)
    }
})