import { reflect } from "@effector/reflect";

import { Select } from "../ui/select";
import { $jobPosition, $jobPositions, changeJobPosition } from "../model/job-position";

export const JobPositionSelect = reflect({
    view: Select,
    bind: {
        label: "Должность",
        name: "job-position",
        value: $jobPosition,
        onChange: (e) => changeJobPosition(e.target.value),
        options: $jobPositions
    }
})