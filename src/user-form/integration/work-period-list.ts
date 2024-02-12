import { reflect } from "@effector/reflect";

import { List } from "../ui/list";

import { $workPeriods } from "../model/work-periods";
import { WorkPeriod } from "../model/types";

export const WorkPeriodList = reflect({
    view: List<WorkPeriod>,
    bind: {
        data: $workPeriods,
        emptyMessage: "Пустой список периодов",
        extractKey: (item) => item.uuid
    }
})