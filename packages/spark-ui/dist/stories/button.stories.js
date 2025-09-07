import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from '../components/button/Button';
const meta = {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Click me',
    },
    argTypes: {
        variant: {
            options: ['solid', 'outline', 'ghost'],
            control: { type: 'radio' },
        },
        size: {
            options: ['sm', 'md', 'lg'],
            control: { type: 'radio' },
        },
    },
};
export default meta;
export const Solid = {
    args: {
        variant: 'solid',
    },
};
export const Outline = {
    args: {
        variant: 'outline',
    },
};
export const Ghost = {
    args: {
        variant: 'ghost',
    },
};
export const Sizes = {
    render: (args) => (_jsxs("div", { style: { display: 'flex', gap: '1rem' }, children: [_jsx(Button, { ...args, size: "sm", children: "Small" }), _jsx(Button, { ...args, size: "md", children: "Medium" }), _jsx(Button, { ...args, size: "lg", children: "Large" })] })),
};
