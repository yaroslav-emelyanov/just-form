import { reflect } from "@effector/reflect";
import { memo } from "react";

import { Button } from "../ui/button";
import { removeWorkPeriod } from "../model/work-periods";

const Component = reflect({
    view: Button,
    bind: {
        children: 'Удалить',
        onClick: (e) => removeWorkPeriod(e.currentTarget.id)
    }
})

export const WorkPeriodDeleteButton = memo(Component)