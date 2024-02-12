import { reflect } from "@effector/reflect";

import { Input } from "../ui/input";
import { changeWorkPeriod } from "../model/work-periods";
import { memo } from "react";

const Component = reflect({
     view: Input,
     bind: {
        label: 'Название компании',
        onChange: (e) => changeWorkPeriod({ uuid: e.target.id, data: { companyName: e.target.value } })
     }
});

export const WorkPeriodCompanyNameInput = memo(Component);