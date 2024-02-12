import { reflect } from "@effector/reflect";
import { Typography } from "antd";

import { $workPeriods } from "../model/work-periods";

const $sum = $workPeriods.map((periods) => periods.reduce((acc, period) => acc + period.numberYears, 0));

const $sumText = $sum.map((sum) => `Количество опыта (лет) - ${sum}`)

export const SumYearsText = reflect({
    view: Typography.Text,
    bind: {
        children: $sumText,
    }
})