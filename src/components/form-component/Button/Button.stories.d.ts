import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import("react").FC<import("./Button").ButtonProps>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        variant: {
            control: "select";
            options: string[];
        };
        size: {
            control: "radio";
            options: string[];
        };
        isLoading: {
            control: "boolean";
        };
        disabled: {
            control: "boolean";
        };
        customColor: {
            control: "color";
        };
        iconPosition: {
            control: "radio";
            options: string[];
        };
        onClick: {
            action: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const WithLeftIcon: Story;
export declare const WithRightIcon: Story;
export declare const IconOnly: Story;
export declare const IconOnlyDanger: Story;
export declare const IconOnlyLarge: Story;
export declare const Loading: Story;
export declare const CustomColor: Story;
