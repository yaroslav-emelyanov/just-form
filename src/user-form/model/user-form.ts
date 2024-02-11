import { createEvent, sample } from 'effector';

import { $workPeriods } from './work-periods';
import { $firstName, $lastName } from './name';
import { $yearsOld } from './years-old';
import { $jobPosition } from './job-position';

export const submit = createEvent();

const validSubmit = sample({
    clock: submit,
    source: { 
        firstName: $firstName, 
        lastName: $lastName, 
        yearsOld: $yearsOld, 
        jobPosition: $jobPosition, 
        workPeriods: $workPeriods 
    }
})

validSubmit.watch((data) => console.log('form', data))