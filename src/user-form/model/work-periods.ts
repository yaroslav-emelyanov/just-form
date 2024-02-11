import { createEvent, createStore, sample } from "effector";
import { WorkPeriod } from "./types";

export const $workPeriods = createStore<WorkPeriod[]>([
    {
        uuid: crypto.randomUUID(),
        companyName: "Test company name",
        numberYears: 5,
    }
]);

export const addWorkPeriod = createEvent<WorkPeriod>();
$workPeriods.on(addWorkPeriod, (list, item) => [...list, item]);

export const removeWorkPeriod = createEvent<string>();
$workPeriods.on(removeWorkPeriod, (list, uuid) => list.filter((item) => item.uuid !== uuid))

export const addEmptyWorkPeriod = createEvent();

// Добавление не заполненного периода
sample({
    clock: addEmptyWorkPeriod,
    fn: () => {
        const workPeriod: WorkPeriod = { uuid: crypto.randomUUID(), companyName: '', numberYears: 0  };
        return workPeriod;
    },
    target: addWorkPeriod
})

interface ChangeWorkPeriodData {
   uuid: string;
   data: Partial<Omit<WorkPeriod, 'uuid'>>;
}

export const changeWorkPeriod = createEvent<ChangeWorkPeriodData>();

$workPeriods.on(changeWorkPeriod, (list, { uuid, data }) => 
  list.map((item) => item.uuid === uuid ? ({ ...item, ...data }) : item)
)