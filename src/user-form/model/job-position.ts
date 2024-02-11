import { createEvent, createStore } from "effector";


export const changeJobPosition = createEvent<string>();
export const $jobPosition = createStore<string>('');

$jobPosition.on(changeJobPosition, (_, value) => value)

export const $jobPositions = createStore<{label: string, value: string}[]>([
    {
        label: "Врач",
        value: "doctor",
    },
    {
        label: "Учитель",
        value: "teacher",
    },
    {
        label: "Инженер",
        value: "engineer",
    },
    {
        label: "Адвокат",
        value: "lawyer",
    },
    {
        label: "Менеджер",
        value: "manager",
    },
 ])