import type { StoryObj } from '@storybook/react';
import { type LoadingProps } from './Loading';
declare const meta: {
    title: string;
    component: import("react").FC<LoadingProps>;
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
        color: {
            control: "color";
        };
        overlay: {
            control: "boolean";
        };
        fullScreen: {
            control: "boolean";
        };
        blur: {
            control: "boolean";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Spinner: Story;
export declare const Dots: Story;
export declare const WithMessage: Story;
export declare const CustomColor: Story;
export declare const CustomImage: Story;
export declare const Overlay: Story;
export declare const FullScreen: Story;
