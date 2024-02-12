import { memo } from "react";

import { AddWorkPeriodButton } from "../integration/add-work-period";
import { WorkPeriodCompanyNameInput } from "../integration/company-name-input";
import { WorkPeriodDeleteButton } from "../integration/delete-work-period";
import { FirstNameInput } from "../integration/first-name-input";
import { JobPositionSelect } from "../integration/job-position-select";
import { LastNameInput } from "../integration/last-name-input";
import { MiddleNameInput } from "../integration/middle-name-input";
import { SubmitButton } from "../integration/submit-button";
import { WorkPeriodList } from "../integration/work-period-list";
import { WorkPeriodNumberYearsInput } from "../integration/work-period-input";
import { SumYearsText } from "../integration/sum-years-text";
import { YearsOldInput } from "../integration/user-years-old-input";

import { WorkPeriod } from "../model/types";


const WorkPeriod: React.FC<{ item: WorkPeriod }> = memo(({ item }) =>
    <div style={{ width: '100%', display: "flex", gap: 8, alignItems: 'flex-end' }}>
        <WorkPeriodCompanyNameInput id={item.uuid} value={item.companyName} />
        <WorkPeriodNumberYearsInput id={item.uuid} value={item.numberYears} />
        <WorkPeriodDeleteButton id={item.uuid} />
    </div>
)

export const UserForm = () => (
    <div style={{ width: 600, display: 'flex', flexDirection: 'column', gap: 8, padding: 8, border: "1px solid black" }}>
        <div style={{ display: 'flex', gap: 8 }}>
          <FirstNameInput />
          <LastNameInput />
          <MiddleNameInput />
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
            <YearsOldInput />
            <JobPositionSelect />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: 8, border: "1px solid black" }}>
            <WorkPeriodList renderItem={(item) => <WorkPeriod item={item} />} />
            <AddWorkPeriodButton />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <SumYearsText />
           <SubmitButton />
        </div>
    </div>
)