import { createEvent, restore } from "effector";

export const changeFirstName = createEvent<string>()
export const $firstName = restore(changeFirstName,'');

export const changeLastName = createEvent<string>()
export const $lastName = restore(changeLastName, '');

export const changeMiddleName = createEvent<string>()
export const $middleName = restore(changeMiddleName, '');