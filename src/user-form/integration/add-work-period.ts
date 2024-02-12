import { reflect } from "@effector/reflect";

import { Button } from "../ui/button";
import { addEmptyWorkPeriod } from "../model/work-periods";

export const AddWorkPeriodButton = reflect({
    view: Button,
    bind: {
        children: "Добавить период",
        onClick: () => addEmptyWorkPeriod()
    }
})