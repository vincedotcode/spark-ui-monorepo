/**
 * Utility to join class names together. Accepts strings, falsey values, or
 * undefined. Inspired by the `clsx` package, but implemented locally to
 * avoid adding extra dependencies. Usage:
 *
 * ```ts
 * cn('foo', condition && 'bar', anotherCondition ? 'baz' : null);
 * // => 'foo bar'
 * ```
 */
export declare function cn(...classes: (string | false | null | undefined)[]): string;
