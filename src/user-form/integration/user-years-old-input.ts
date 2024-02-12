import { reflect } from "@effector/reflect";

import { Input } from "../ui/input";
import { $yearsOld, changeYearsOld } from "../model/years-old";

export const YearsOldInput = reflect({
    view: Input,
    bind: {
        id: "years-old",
        label: 'Возраст',
        type: 'number',
        value: $yearsOld,
        onChange: (e) => changeYearsOld(Number(e.target.value))
    }
})