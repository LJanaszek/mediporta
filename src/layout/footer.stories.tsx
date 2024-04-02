import { Meta } from "@storybook/react";
import FooterPage from "./footer";
import "../style.scss"
export default {
    component: FooterPage,
    title: 'Footer',
    tags: ['autodocs'],
}satisfies Meta<typeof FooterPage>;
export const Default = {
    args: {
        task: {
            id: '1',
            title: 'Footer',
            state: 'TASK_INBOX',
        },
    },
};