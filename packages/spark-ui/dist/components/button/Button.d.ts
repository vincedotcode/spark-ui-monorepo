import * as React from 'react';
import './button.css';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Defines the visual variant of the button. The solid variant uses a
     * filled background, the outline variant draws a coloured border and the
     * ghost variant is minimally styled with no border.
     */
    variant?: 'solid' | 'outline' | 'ghost';
    /**
     * Size of the button. Controls padding and font size. Defaults to "md".
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * If true and the button’s child is a single React element, clones the
     * child and merges in the button’s props. This enables composition
     * patterns similar to Radix UI’s Slot primitive without pulling in
     * external dependencies. When `asChild` is true, no `<button>` element
     * will be rendered.
     */
    asChild?: boolean;
}
/**
 * Spark UI Button component. Provides semantic button styling with
 * configurable variants and sizes. Colours, spacing and radii are
 * driven entirely by CSS custom properties defined in `tokens.css`.
 */
export declare const Button: any;
