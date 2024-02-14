import { combine, createEvent, createStore, sample } from 'effector';

import { $workPeriods } from './work-periods';
import { $firstName, $isFirstNameValid, $isLastNameValid, $isMiddleNameValid, $lastName } from './name';
import { $yearsOld } from './years-old';
import { $isJobPositionValid, $jobPosition } from './job-position';

export const submit = createEvent();
export const $hasBeenSubmitted = createStore(false);

const $isFormValid = combine(
    [$isFirstNameValid, $isLastNameValid, $isMiddleNameValid, $isJobPositionValid], 
    (values) => values.every(Boolean)
)

$hasBeenSubmitted.on(submit, () => true);

const validSubmit = sample({
    clock: submit,
    filter: $isFormValid,
    source: { 
        firstName: $firstName, 
        lastName: $lastName, 
        yearsOld: $yearsOld, 
        jobPosition: $jobPosition, 
        workPeriods: $workPeriods 
    }
})

validSubmit.watch((data) => console.log('form', data))