import { reflect } from "@effector/reflect";
import { combine } from "effector";

import { Select } from "../ui/select";
import { $isJobPositionValid, $jobPosition, $jobPositions, changeJobPosition } from "../model/job-position";
import { $hasBeenSubmitted } from "../model/user-form";

const $hasError = combine(
    [$hasBeenSubmitted, $isJobPositionValid], 
    ([hasBeenSubmitted, isValid]) => hasBeenSubmitted ? !isValid : false 
);

export const JobPositionSelect = reflect({
    view: Select,
    bind: {
        label: "Должность",
        name: "job-position",
        value: $jobPosition,
        onChange: changeJobPosition,
        options: $jobPositions,
        hasError: $hasError,
        additionalMessage: $hasError.map((hasError) => hasError ? 'Выберите должность' : '')
    }
})