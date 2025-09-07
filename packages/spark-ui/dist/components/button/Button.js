import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import { cn } from '../../utils/cn';
import './button.css';
/**
 * Spark UI Button component. Provides semantic button styling with
 * configurable variants and sizes. Colours, spacing and radii are
 * driven entirely by CSS custom properties defined in `tokens.css`.
 */
export const Button = React.forwardRef((props, ref) => {
    const { variant = 'solid', size = 'md', asChild = false, children, className, ...rest } = props;
    const classes = cn('sp-btn', variant !== 'solid' && `sp-btn--${variant}`, size && `sp-btn--${size}`, className);
    // If asChild is true and the only child is a valid element, clone it
    // and merge the classes and props. Otherwise render a <button>.
    if (asChild && React.isValidElement(children)) {
        // Cast the child to ReactElement to satisfy the type checker
        const child = children;
        const childClassName = child.props.className;
        return React.cloneElement(child, {
            className: cn(childClassName, classes),
            ref,
            ...rest,
        });
    }
    return (_jsx("button", { ref: ref, className: classes, ...rest, children: children }));
});
Button.displayName = 'Button';
