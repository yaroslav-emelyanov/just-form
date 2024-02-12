import { reflect } from "@effector/reflect";
import { memo } from "react";

import { Input } from "../ui/input";
import { changeWorkPeriod } from "../model/work-periods";

const Component = reflect({
    view: Input,
    bind: {
      label: "Кол-во лет",
      name: "period",
      type: 'number',
      onChange: (e) => changeWorkPeriod({ uuid: e.currentTarget.id, data: { numberYears: Number(e.target.value) } })
    }
})

export const WorkPeriodNumberYearsInput = memo(Component);