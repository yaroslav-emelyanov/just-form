import { Card, Flex, List, Space } from "antd";
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
    <List.Item>
         <Flex align="flex-end" gap={8}>
            <WorkPeriodCompanyNameInput id={item.uuid} value={item.companyName} />
            <WorkPeriodNumberYearsInput id={item.uuid} value={item.numberYears} />
            <WorkPeriodDeleteButton id={item.uuid} />
         </Flex>
    </List.Item>
)

export const UserForm = () => (
    <Card style={{ width: 600 }}>
        <Space direction="vertical" size={16}>
            <Flex gap={8}>
                <FirstNameInput />
                <LastNameInput />
                <MiddleNameInput />
            </Flex>
            <Flex gap={8}>
                <YearsOldInput />
                <JobPositionSelect />
            </Flex>
            <Card actions={[<AddWorkPeriodButton />]}>
                <WorkPeriodList renderItem={(item) => <WorkPeriod item={item} />} />
            </Card>
            <Flex justify="space-between">
                <SumYearsText />
            <SubmitButton />
            </Flex>
        </Space>
    </Card>
)