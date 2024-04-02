import { Meta } from "@storybook/react";
import TableSort from ".";
import "../../style.scss"
export default {
    component: TableSort,
    title: 'Task',
    tags: ['autodocs'],
}satisfies Meta<typeof TableSort>;
export const Default = {
    args: {
        task: {
            id: '1',
            title: 'Table',
            state: 'TASK_INBOX',
        },
    },
};