import { Meta } from "@storybook/react";
import HeaderPage from "./header";
import "../style.scss"
export default {
    component: HeaderPage,
    title: 'Header',
    tags: ['autodocs'],
}satisfies Meta<typeof HeaderPage>;
export const Default = {
    args: {
        task: {
            id: '1',
            title: 'Header',
            state: 'TASK_INBOX',
        },
    },
};