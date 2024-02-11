import { createEvent, createStore } from "effector";

export const $yearsOld = createStore<number>(0);

export const changeYearsOld = createEvent<number>();

$yearsOld.on(changeYearsOld, (_, value) => value)
